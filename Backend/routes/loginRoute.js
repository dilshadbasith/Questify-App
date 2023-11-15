const express = require("express");
const router = express.Router();
const controller = require("../Controller/loginController");

router.post("/", controller.Login);
module.exports = router;