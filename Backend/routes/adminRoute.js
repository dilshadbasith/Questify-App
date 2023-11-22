const express = require("express");
const router = express.Router();
const controller = require("../Controller/adminController");
//router.post("/login", controller.login);
router.get("/getuser", controller.getUsers);
router.get("/getquestions", controller.getQuestions);
router.get("/getanswers", controller.getAnswers);
router.delete("/deleteanswer/:id", controller.deleteAnswers);

module.exports = router;
