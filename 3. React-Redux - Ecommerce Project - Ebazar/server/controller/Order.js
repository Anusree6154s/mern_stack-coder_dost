const { Order } = require('../model/Order.js')

exports.createOrder = async (req, res) => {
    const order = new Order(req.body)
    try {
        const data = await order.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.fetchOrdersByUser = async (req, res) => {
    const { user } = req.query
    try {
        const data = await Order.find({ user: user })
    res.status(201).json(data)

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteOrder = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Order.findByIdAndDelete(id)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updateOrder = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Order.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.fetchAllOrders = async (req, res) => {
    let orders = Order.find()

    if (req.query._sort && req.query._order) {
        orders = orders.sort({ [req.query._sort]: req.query._order })
    }
    if (req.query._page) {
        const pageSize = 10
        const page = req.query._page
        orders = orders.skip(pageSize * (page - 1)).limit(pageSize)
    }

    try {
        const data = await orders.exec()
        res.status(201).json(data)

    } catch (error) {
        res.status(400).json(error)
    }
}