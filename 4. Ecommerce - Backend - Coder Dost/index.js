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

const server = express()
const uri = 'mongodb+srv://anilkumaranusree113:anilkumar113anusree@cluster0.epejqnj.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0'

//middlewares
server.use(cors({ exposedHaders: ['X-Total-Count'] }))
server.use(express.json())//to parse request body
server.use('/products', productsRouter.router)
server.use('/categories', categoriesRouter.router)
server.use('/brands', brandsRouter.router)
server.use('/users', usersRouter.router)
server.use('/auth', authRouter.router)
server.use('/cart', cartRouter.router)
server.use('/orders', orderRouter.router)

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
