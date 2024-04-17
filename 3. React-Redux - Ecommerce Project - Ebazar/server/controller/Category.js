const { Category } = require('../model/Category.js')

exports.createCategory = async (req, res) => {
    //body from API body
    const category = new Category(req.body)
    try {
        const data = await category.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)

    }
}

exports.fetchCategories = async (req, res) => {
    try {
        const data = await Category.find().exec()
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}