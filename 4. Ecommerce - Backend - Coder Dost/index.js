require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productsRouter = require('./routes/Products.js')
const categoriesRouter = require('./routes/Categories.js')
const brandsRouter = require('./routes/Brands.js')
const usersRouter = require('./routes/Users.js')
const authRouter = require('./routes/Auth.js')
const cartRouter = require('./routes/Cart.js')
const orderRouter = require('./routes/Order.js')
const cors = require('cors')

// imports related to passport authentication
const session = require('express-session');
const passport = require('passport');
const { User } = require('./model/User.js');
const LocalStrategy = require('passport-local').Strategy
const crypto = require('crypto');
const { isAuth, santizeUser, cookieExtractor } = require('./services/common.js');

//imports related to jwt authentication
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

//import related to cookies
var cookieParser = require('cookie-parser')


const server = express()
const uri = process.env.URI

//jwt authentication
const secretKey = process.env.SECRET_KEY;
var opts = {}
opts.jwtFromRequest = cookieExtractor
opts.secretOrKey = secretKey;

//passport authentication
server.use(cookieParser());
server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
server.use(passport.authenticate('session'));

//passport strategies
passport.use('local', new LocalStrategy(
    { usernameField: "email" },
    async function (email, password, done) {
        try {
            const user = await User.findOne({ email: email }).exec()
            if (!user) {
                return done(null, false, { message: 'No such user email' })
            }

            crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', async function (err, hashedPassword) {
                if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
                    done(null, false, { message: 'Invalid credentials' })
                } else {
                    const token = jwt.sign(santizeUser(user), secretKey);
                    return done(null, santizeUser(user)) //this line sends to serializer
                }
            });

        } catch (error) {
            return done(error)
        }
    }
));
passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, santizeUser(user));
    });
});
passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

passport.use('jwt', new JwtStrategy(opts, async function (jwt_payload, done) {
    const user = await User.findOne({ _id: jwt_payload.id });
    try {
        if (user) {
            return done(null, santizeUser(user)); //this calls serializer
        } else {
            return done(null, false);
            // or you could create a new account
        }
    } catch (error) {
        return done(err, false);
    }

}));

//middlewares
server.use(cors({ exposedHeaders: ['X-Total-Count'] }))
server.use(express.json())//to parse request body
server.use(express.raw({ type: 'application/json' }))
server.use('/products', isAuth(), productsRouter.router)
server.use('/categories', isAuth(), categoriesRouter.router)
server.use('/brands', isAuth(), brandsRouter.router)
server.use('/users', isAuth(), usersRouter.router)
server.use('/auth', authRouter.router)
server.use('/cart', isAuth(), cartRouter.router)
server.use('/orders', isAuth(), orderRouter.router)

//payments
const stripe = require("stripe")(process.env.STRIPE);


server.post("/create-payment-intent", async (req, res) => {
    const { totalPrice } = req.body;
    console.log("recieved")
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: totalPrice * 100,
        currency: "inr",
        description: " for amazon-clone project",
        shipping: {
            name: "Random singh",
            address: {
                line1: "510 Townsend St",
                postal_code: "98140",
                city: "San Francisco",
                state: "Gujrat",
                country: "US",
            },
        },
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});



//webhook
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
const endpointSecret = 'whsec_21dc86952f9d9ad1b64e0a382d74895e8064777d14081ee4be8b9cd760305d6b';

server.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
    let event = request.body;
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
        // Get the signature sent by Stripe
        const signature = request.headers['stripe-signature'];
        try {
            event = stripe.webhooks.constructEvent(
                request.body,
                signature,
                endpointSecret
            );
        } catch (err) {
            console.log(`⚠️  Webhook signature verification failed.`, err.message);
            return response.sendStatus(400);
        }
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
            // Then define and call a method to handle the successful payment intent.
            // handlePaymentIntentSucceeded(paymentIntent);
            break;
        case 'payment_method.attached':
            const paymentMethod = event.data.object;
            // Then define and call a method to handle the successful attachment of a PaymentMethod.
            // handlePaymentMethodAttached(paymentMethod);
            break;
        default:
            // Unexpected event type
            console.log(`Unhandled event type ${event.type}.`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
});



async function main() {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('database connected')
}

main().catch(error => console.log(error))

server.get('/', (req, res) => {
    res.json({ status: 'success' })
})



server.listen(8080, () => {
    console.log('server started')
})
