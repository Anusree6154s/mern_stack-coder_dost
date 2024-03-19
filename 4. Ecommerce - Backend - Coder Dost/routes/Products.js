const express = require('express')
const { createProduct, fetchProductsById, updateProduct } = require('../controller/Product.js');
const { fetchAllQuery } = require('../controller/Product.js');

const router = express.Router()

router.post('/', createProduct)
    .get('/', fetchAllQuery)
    .get('/:id', fetchProductsById)
    .patch('/:id', updateProduct)

exports.router = router