require("dotenv").config()
const express= require('express');
const cors=require('cors')
const  mongoose = require('mongoose');
const app= express()
const port = process.env.PORT;
const userRoute=require('./routes/userRoute');
const adminRoute=require('./routes/adminRoute')
const questionRoute=require('./routes/questionRoute')
const answerRoute=require('./routes/answerRoute')
const loginRoute=require('./routes/loginRoute')
mongoose.connect("mongodb://0.0.0.0:27017/backend-project")
.then(()=>console.log("connected"))

app.use(cors())
app.use(express.json())
app.use('/api/user',userRoute)
app.use('/api/admin',adminRoute)
app.use('/api/login',loginRoute)
app.use('/api/questions',questionRoute)
app.use('/api/answers',answerRoute)


app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`server is running on port ${port}`)
})