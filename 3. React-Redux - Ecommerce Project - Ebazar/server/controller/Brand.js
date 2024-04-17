const { Brand } = require('../model//Brand.js')

exports.createBrand = async (req, res) => {
    const brand = new Brand(req.body)
    try {
        const data = await brand.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.fetchBrands = async (req, res) => {
    try {
        const data = await Brand.find().exec()
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}