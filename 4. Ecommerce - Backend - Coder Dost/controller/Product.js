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
    let product =null;
    if(req.query.role==='user'){
        product = Product.find({ deleted: { $ne: true } })
    } else if(req.query.role==='admin'){
        product = Product.find()
    }
    
    if (req.query._sort && req.query._order) {
        product = product.sort({ [req.query._sort]: req.query._order })
    }
    if (req.query.category) {
        const categories = req.query.category.includes(',') ? req.query.category.split(',') : req.query.category;
        product = product.find({ category:{$in: categories }})
    }
    if (req.query.brand) {
        const brands = req.query.brand.includes(',') ? req.query.brand.split(',') : req.query.brand;
        product = product.find({ brand:{$in: brands }})
    }
    if (req.query._page) {
        const pageSize = 10
        const page = req.query._page
        product = product.skip(pageSize * (page - 1)).limit(pageSize)
    }

    try {
        const data = await product.exec()
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
