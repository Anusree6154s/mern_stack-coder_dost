const express = require('express')
const { fetchUserById, updateUser} = require('../controller/User.js');

const router = express.Router()

router.get('/user', fetchUserById)
    .patch('/user/:id', updateUser)


exports.router = router