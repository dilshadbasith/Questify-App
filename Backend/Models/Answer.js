const mongoose=require('mongoose')
const AnswerSchema=new mongoose.Schema({
    answer:String,
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"questions"
    },
    questionUrl:String,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    answers:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Answers"
    },
    user:Object,
})

module.exports=mongoose.model("Answers",AnswerSchema)