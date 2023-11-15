const mongoose=require('mongoose')
const QuestionSchema=new mongoose.Schema({
    questionName:String,
    questionUrl:String,
    likes:[],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    
    user:Object,
    //reference to user collection
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

module.exports=mongoose.model("Questions",QuestionSchema)