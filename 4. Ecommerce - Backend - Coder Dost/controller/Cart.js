const { Cart } = require('../model/Cart.js')

exports.addToCart = async (req, res) => {
    const cart = new Cart(req.body)
    try {
        const data = await cart.save()
        await data.populate('product')
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.fetchCartByUser = async (req, res) => {
    const { id } = req.user
    try {
        const data = await Cart.find({ user: id }).populate('product')
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteFromCart = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Cart.findByIdAndDelete(id)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updateCart = async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    try {
        const data = await Cart.findByIdAndUpdate(id, updateData, {new:true})
        await data.populate('product')
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}