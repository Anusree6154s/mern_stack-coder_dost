const express = require('express')
const { fetchUserById, updateUser, loginUser } = require('../controller/User.js');

const router = express.Router()

router.get('/user/:id', fetchUserById)
    .get('/login', loginUser)
    .patch('/user/:id', updateUser)


exports.router = router