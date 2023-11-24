const mongoose=require('mongoose')
const answerDB=require('../Models/Answer')
mongoose.connect("mongodb://0.0.0.0:27017/backend-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  module.exports={
    answers:async(req,res)=>{
        try{
            const {answer,questionId,user}=req.body
            await answerDB.create({
                answer:answer,
                //destructure it
                questionId:questionId,
                user:user,
            }).then(()=>{
                res.status(201).send({
                    status:true,
                    message:"answer added successfully"
                })
            }).catch((e)=>{
                res.status(400).send({
                    status:false,
                    message:"Bad request"
                })
            })
        }catch(e){
            res.status(500).send({
                status:false,
                message:"Error while adding answer"
            })
        }
    }
  }