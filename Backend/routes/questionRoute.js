const express = require('express')
const router=express.Router()
const controller=require('../Controller/questionController')

router.post('/',controller.questions)
router.get('/',controller.aggregation)
module.exports = router;  