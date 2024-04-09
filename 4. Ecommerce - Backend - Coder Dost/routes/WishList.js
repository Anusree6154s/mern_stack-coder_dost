const express = require('express')
const { fetchWishListByUser, addToWishList, deleteFromWishList, updateWishList } = require('../controller/WishList.js');

const router = express.Router()

router.post('/', addToWishList)
    .get('/', fetchWishListByUser)
    .delete('/:id', deleteFromWishList)


exports.router = router