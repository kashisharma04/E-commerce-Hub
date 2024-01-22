const express = require('express')
const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    // productId = Object
    proName : {type: String},
    proImg : {type : String},
    proInfo : {type : String},
    proPrice : {type : String}
},
{timeStamp : true,}
)
module.exports =  mongoose.model('Cart' , cartSchema);