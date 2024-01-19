const mongoose = require('mongoose')

const productList = require('../models/productCart')

const createProduct = async function (req,res){
    let data = req.body;
    const result = await productList.create(data);
    // console.log(result);
    return res.status(201).send({status : true , msg : result })
}
const getProduct = async function(req,res){
    let data = await productList.find()
    return res.status(201).send({status : true , msg : data })
}
module.exports = {createProduct, getProduct}