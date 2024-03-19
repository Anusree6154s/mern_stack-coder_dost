const { Product } = require('../model/Product.js')

exports.createProduct = async (req, res) => {
    //body from API body
    const product = new Product(req.body)
    try {
        const data = await product.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)

    }
}

exports.fetchAllQuery = async (req, res) => {
    let query = Product.find({})
    if (req.query._sort && req.query._order) {
        query = query.sort({ [req.query._sort]: req.query._order })
    }
    if (req.query.category) {
        query = query.find({ category: req.query.category })
    }
    if (req.query.brand) {
        query = query.find({ category: req.query.brand })
    }
    if (req.query._page) {
        const pageSize = 10
        const page = req.query._page
        query = query.skip(pageSize * (page - 1)).limit(pageSize)
    }

    try {
        const data = await query.exec()
        res.status(201).json(data)

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.fetchProductsById = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Product.findById(id)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

exports.updateProduct = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Product.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}
