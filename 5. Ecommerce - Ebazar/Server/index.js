require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productsRouter = require('./routes/Products.js')
const categoriesRouter = require('./routes/Categories.js')
const brandsRouter = require('./routes/Brands.js')
const usersRouter = require('./routes/Users.js')
const authRouter = require('./routes/Auth.js')
const cartRouter = require('./routes/Cart.js')
const wishListRouter = require('./routes/WishList.js')
const orderRouter = require('./routes/Order.js')
const cors = require('cors')
const path = require("path")

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
        console.log("local called", email)
        try {
            const user = await User.findOne({ email: email }).exec()
            if (!user) {
                console.log("local called2")

                return done(null, false, { message: 'No such user email' })
            }

            crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', async function (err, hashedPassword) {
                if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
                    console.log("local called3")
                    done(null, false, { message: 'Invalid credentials' })
                } else {
                    console.log("local called4")
                    const token = jwt.sign(santizeUser(user), secretKey);
                    console.log(token)
                    return done(null, {info:santizeUser(user), token:token}) //this line sends to serializer
                    // return done(null, santizeUser(user)) //this line sends to serializer
                }
            });

        } catch (error) {
            console.log("local called5")
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
    console.log("jwt")
    console.log(jwt_payload)
    const user = await User.findOne({ _id: jwt_payload.id });
    try {
        if (user) {
            return done(null, santizeUser(user)); //this calls serializer
        } else {
            console.lo("problem2")
            return done(null, false);
            // or you could create a new account
        }
    } catch (error) {
        console.log("bigproblem")
        return done(err, false);
    }

}));

//middlewares
server.use(express.static(path.resolve(__dirname, 'Client/build')))
server.use(cookieParser()); //to get cookies in  req.cookies["jwt"] in 
server.use(cors({ exposedHeaders: ['X-Total-Count'] }))
server.use(express.json())//to parse request body
server.use(express.raw({ type: 'application/json' }))
server.use('/products', isAuth(), productsRouter.router)
server.use('/categories', isAuth(), categoriesRouter.router)
server.use('/brands', isAuth(), brandsRouter.router)
server.use('/users', isAuth(), usersRouter.router)
server.use('/auth', authRouter.router)
server.use('/cart', isAuth(), cartRouter.router)
server.use('/wishlist', isAuth(), wishListRouter.router)
server.use('/orders', isAuth(), orderRouter.router)

// this line we add to make react router work in case of other routes doesnt match
server.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));


//payments
const stripe = require("stripe")(process.env.STRIPE);


server.post("/create-payment-intent", async (req, res) => {
    try {
        const customer = await stripe.customers.create({
            email: req.body.selectedAddress.email,
            shipping: {
                address: {
                    city: "Surat",
                    country: "US",
                    line1: "RR Mall",
                    line2: "Piplod",
                    postal_code: "683521",
                    state: "Gujarat"
                },
                name: "Anu"
            },
            metadata: {
                userId: req.body.user,
            }
        })

        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.totalPrice * 100,
            currency: 'inr',
            customer: customer.id,
            description: "payment for amazon clone",
            automatic_payment_methods: {
                enabled: true,
            },
        });
        console.log(paymentIntent.client_secret)
        res.send({
            clientSecret: paymentIntent.client_secret,
        })

    } catch (error) {
        console.log("checkout session error: ", error)
    }


});


// //webhook

let endpointSecret;

// // This is your Stripe CLI webhook secret for testing your endpoint locally.
//  endpointSecret = "whsec_21dc86952f9d9ad1b64e0a382d74895e8064777d14081ee4be8b9cd760305d6b";

server.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
    const sig = request.headers['stripe-signature'];

    let data, eventType;

    console.log("request.body: ", request.body)
    console.log("sig: ", sig)
    if (endpointSecret) {
        let event;

        try {
            event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
            console.log("webhook verified")
        } catch (err) {
            console.log("webhook error: ", err)
            response.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        data = event.data.object
        eventType = event.type
    } else {
        data = request.body.data.object
        eventType = request.body.type
    }

    if (eventType === 'payment_intent.succeeded') {
        stripe.customers
            .retrieve(data.customer)
            .then(customer => {
                console.log("data: ", data)
            })
            .catch(error => {
                console.error('Error retrieving customer:', error);
            })
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send().end();
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

server.set("trust proxy", 1)
server.listen(process.env.PORT, () => {
    console.log('server started')
})
