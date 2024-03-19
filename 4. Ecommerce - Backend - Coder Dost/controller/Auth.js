
const { User } = require('../model/User.js')

exports.createUser = async (req, res) => {
    const user = new User(req.body)
    try {
        const data = await user.save()
        res.status(201).json(data)
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: error, message: 'Email must be unique.' })
        } else {
            res.status(400).json(error)
        }

    }
}