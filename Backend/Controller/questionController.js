const mongoose=require('mongoose')
const QuestionDB=require('../Models/Question')

  module.exports={
    questions:async(req,res)=>{
        try{
            if(req.body.user){
                await QuestionDB.create({
                    questionName:req.body.questionName,
                    questionUrl:req.body.questionUrl,
                    user:req.body.user
                }).then(()=>{
                    res.status(201).send({
                        status:true,
                        message:"Question added successfully"
                    })
                }).catch((err)=>{
                    res.status(400).send({
                        status:false,
                        message:"bad format"
                    })
                })
            }
        }catch(e){
            res.status(500).send({
                status:false,
                message:"error while adding question"
            }) 
        }
    },

    aggregation:async(req,res)=>{
        try{
            await QuestionDB.aggregate([
                {
                    $lookup:{
                        from:"answers",
                        localField:"_id",
                        foreignField:"questionId",
                        as:"allAnswers"
                    }
                }
            ]).exec().then((doc)=>{
                res.status(200).send(doc)
            }).catch((error)=>{
                res.status(500).send({
                    status:false,
                    message:"Unable to get the question details"
                })
            })
        }catch(e){
            res.status(500).send({
                status:false,
                message:"Unexpected error"
            })
        }
    },
    userquestion:async(req,res)=>{
        try{
                await QuestionDB.create({
                    questionName:req.body.questionName,
                    questionUrl:req.body.questionUrl,
                    users:res.user
                })
        }catch(e){
            res.status(500).send({
                status:false,
                message:"error while adding question"
            }) 
        }
    },
  }