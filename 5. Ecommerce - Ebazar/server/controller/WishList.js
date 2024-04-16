const { WishList } = require('../model/WishList.js')

exports.addToWishList = async (req, res) => {
    const wishList = new WishList(req.body)
    try {
        const data = await wishList.save()
        await data.populate('product')
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.fetchWishListByUser = async (req, res) => {
    const { id } = req.user
    try {
        const data = await WishList.find({ user: id }).populate('product')
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteFromWishList = async (req, res) => {
    const { id } = req.params
    try {
        const data = await WishList.findByIdAndDelete(id)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}
