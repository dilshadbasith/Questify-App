const Joi = require('joi')
const joiUserSchema=Joi.object({
    name:Joi.string(),
    email:Joi.string().email(),
    username:Joi.string().min(3).max(30),
    password:Joi.string().required()
})

module.exports={joiUserSchema}