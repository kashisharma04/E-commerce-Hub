const express= require('express')

const cart = require('../models/cart');

const createCart = async (req,res)=>{
    let data = req.body;
    const result = await cart.create(data);
    return res.status(201).send({Status : true, msg : "Product Created Successfully" , result : result})
}
const getCart = async function(req,res){
    let data = await cart.find({proName:1 , proImg :1})
    return res.status(201).send({status : true , msg : data })
}
module.exports = {createCart, getCart};
