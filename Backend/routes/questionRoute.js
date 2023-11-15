const express = require('express')
const router=express.Router()
const controller=require('../Controller/questionController')
const auth=require('../middleware/Auth')

router.post('/',controller.questions)
router.post('/userquestion',auth,controller.userquestion)
router.get('/',controller.aggregation)
module.exports = router;  