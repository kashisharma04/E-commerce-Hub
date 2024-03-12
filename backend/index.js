const express= require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const route = require('./src/routes/route')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))


.then(()=>{
    console.log("Database Connected!")
})
.catch((err)=>{
    console.log(err.message);
})
app.use('/',route)
app.listen(8080, ()=>{
    console.log("Server running at Port : 8080");
})




