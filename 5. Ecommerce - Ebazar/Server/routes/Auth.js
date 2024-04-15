const express = require('express')
const { createUser, loginUser, checkAuth, resetPassword, sendOTP } = require('../controller/Auth.js');
const passport = require('passport');

const router = express.Router()

router.post('/signup', createUser)
    .post('/sendOTP', sendOTP)
    .patch('/resetpassword/:id', resetPassword)
    .post('/login', passport.authenticate('local'), loginUser)
    .get('/check', passport.authenticate('jwt'), checkAuth)


exports.router = router