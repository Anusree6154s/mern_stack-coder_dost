const express = require('express')
const { fetchCategories, createCategory } = require('../controller/Category.js');

const router = express.Router()

router.get('/', fetchCategories)
    .post('/', createCategory)

exports.router = router