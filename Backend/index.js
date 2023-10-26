const express= require('express');
const cors=require('cors')
const  mongoose = require('mongoose');
const app= express()
const port = 3000;
const userRoute=require('./routes/userRoute');
require("dotenv").config()
mongoose.connect("mongodb://0.0.0.0:27017/backend-project");

app.use(cors())
app.use(express.json())
app.use('/api/user',userRoute)


app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`server is running on port ${port}`)
})