const User=require("../Models/userSchema")
const mongoose=require("mongoose")
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken");
const {joiUserSchema}=require('../Models/joiValidationSchema')
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
    }
  }