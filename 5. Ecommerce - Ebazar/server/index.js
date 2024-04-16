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
const paymentRouter = require('./routes/Payment.js')
const cors = require('cors') //to allow cross-origin resource sharing during dev
const path = require("path")
const { isAuth } = require('./services/common.js');
var cookieParser = require('cookie-parser');//import related to cookies

const { authenticateSession, sessionMiddleware } = require('./services/passport.js');


const server = express()


// passport session authentication middleware
server.use(sessionMiddleware);
server.use(authenticateSession());


//middlewares
server.use(express.static(path.resolve(__dirname, '..', 'client/build')))
server.use(cookieParser()); //to get cookies in  req.cookies["jwt"] in 
server.use(cors({ exposedHeaders: ['X-Total-Count'] }))
server.use(express.json()) //to parse request body
// server.use(express.raw({ type: 'application/json' })) //for webhook

server.use('/products', isAuth(), productsRouter.router)
server.use('/categories', isAuth(), categoriesRouter.router)
server.use('/brands', isAuth(), brandsRouter.router)
server.use('/users', isAuth(), usersRouter.router)
server.use('/auth', authRouter.router)
server.use('/cart', isAuth(), cartRouter.router)
server.use('/wishlist', isAuth(), wishListRouter.router)
server.use('/orders', isAuth(), orderRouter.router)
server.use('/', paymentRouter.router)
// this line we add to make react router work in case of other routes doesnt match
server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'client/build', 'index.html')));

async function main() {
    await mongoose.connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('database connected')
}

main().catch(error => console.log("error"))

server.get('/', (req, res) => {
    res.json({ status: 'success' })
})

server.listen(process.env.PORT, () => {
    console.log('server started')
})
