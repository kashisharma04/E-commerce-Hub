const mongoose = require('mongoose');
const productList = new mongoose.Schema({
    id : {type : Number},
    title : {type : String},
    imgurl : {type:String},
    path:{type:String},
    info : {type: String},
    price : {type : String}
},
    {timestamps : true}

)
module.exports = mongoose.model('Product' , productList);