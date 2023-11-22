const jwt = require("jsonwebtoken");
const mongoose=require("mongoose");
const userSchema=require('../Models/userSchema')
const questionSchema=require('../Models/Question')
const answerSchema=require('../Models/Answer')
require("dotenv").config();
mongoose.connect("mongodb://0.0.0.0:27017/backend-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  module.exports={
    login: async (req, res) => {
        const { username, password } = req.body;
        if (
          username === process.env.ADMIN_USERNAME &&
          password === process.env.ADMIN_PASSWORD
        ) {
          
          const token = jwt.sign(
            { username: username },
            process.env.ADMIN_ACCESS_TOKEN_SECRET
          );
          res.status(200).json({
            status: "success",
            message: "Successfully logged in",
            data: { jwt_token: token },
          });
        } else {
          return res.status(404).json({ error: "Not an admin" });
        }
      },
      getUsers:async(req,res)=>{
        const users=await userSchema.find()
        res.json(users)
      },
      getQuestions:async(req,res)=>{
        const questions=await questionSchema.find()
        res.json(questions)
      },
      getAnswers:async(req,res)=>{
        const answers = await answerSchema.find()
        res.json(answers)
      },
      deleteAnswers:async(req,res)=>{
        await answerSchema.deleteOne({_id:req.params.id})
        res.json("successfull")       
      }

  }