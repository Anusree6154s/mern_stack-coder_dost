const { User } = require('../model/User.js')



exports.fetchUserById = async (req, res) => {
    const { id } = req.params
    try {
        const data = await User.findById(id, 'name email id').exec()
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updateUser = async (req, res) => {
    const { id } = req.params
    try {
        const data = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.loginUser = async (req, res) => {
    try {
        const data = await User.findOne({ email: req.query.email})
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}
