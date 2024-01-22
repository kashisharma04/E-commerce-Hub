const express= require('express')

const {createProduct,getProduct} = require('../controllers/productcartControl')

const {createCart, getCart} = require('../controllers/cartControl')

const router= express.Router();

//admin cart
router.get('/product',getProduct)
router.post('/product', createProduct);

//product cart
router.post('/pro', createCart);
router.get('/pro', getCart);

module.exports = router;
