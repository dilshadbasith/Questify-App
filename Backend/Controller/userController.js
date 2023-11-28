const User=require("../Models/userSchema")
const mongoose=require("mongoose")
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken");
const {joiUserSchema}=require('../Models/joiValidationSchema')
const contentschema=require("../Models/Question")
const answerSchema=require("../Models/Answer")
mongoose.connect("mongodb://0.0.0.0:27017/backend-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  module.exports={
    registration:async(req,res)=>{
        const {value,error}=joiUserSchema.validate(req.body);
        const {name,email,username,password} = value;
        if(error){
            res.json(error.message)
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name:name,
            email:email,
            username:username,
            password:hashedPassword
        });

        res.status(200).json({
            status:"success",
            message:"successfully registered"
        })
    },

    userLogin:async(req,res)=>{
        const {value,error}=joiUserSchema.validate(req.body);
        const {username,password}=value;
        const user=await User.findOne({username:username});
        const checkPassword=await bcrypt.compare(password,user.password);
        const token = jwt.sign(
            {username:username},
            process.env.USER_ACCESS_TOKEN_SECRET,
            {
                expiresIn:86400,
            }
        );
        if(error){
            res.json(error.message)
        }
        else if(!user){
            return res.json({error:"User not found"})
        }
        else if(!password||!user.password){
            return res.json({status:"error",message:"invalid output"})
        }
        else if(!checkPassword){
            res.json({status:"error",message:"password incorrect"})
        }
        else {
            
            res.status(200).json({
                status:"success",
                message:"Login successfull",
                data:token
            })
        }
    },

    setLike:async(req,res)=>{
        const {id, user_id}= req.body;
        console.log(id,user_id)
        const likeUser=await contentschema.findOne({_id:id})
        if(!likeUser.likes.includes(user_id)){
            const setLike=await contentschema.updateOne(
                {_id:id},
                {$push:{likes:user_id}}
            )
            res.json(setLike)
        }else{
            const dislike = await contentschema.updateOne(
                {_id:id},
                {$pull:{likes:user_id}}
            )
            res.json(dislike)
        }
    },
    profilequestions:async(req,res)=>{
        const{uid}=req.body
        try{
            await contentschema.aggregate([
                { $match : {"user.uid":uid} },
                {
                   
                    
                    $lookup:{
                        from:"answers",
                        localField:"_id",
                        foreignField:"questionId",
                        as:"allAnswers"
                    }
                }
            ]).exec().then((doc)=>{
                console.log(doc)
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
                message:e.message
            })
        }
    }
  }