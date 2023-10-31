const express = require('express')
const router=express.Router()
const controller=require('../Controller/answerController')

router.post('/',controller.answers)

module.exports = router;