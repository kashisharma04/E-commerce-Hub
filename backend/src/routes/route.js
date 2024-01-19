const express= require('express')
const {createProduct,getProduct} = require('../controllers/productcartControl')
const router= express.Router();

router.get('/product',getProduct)

router.post('/product', createProduct);

module.exports = router;
