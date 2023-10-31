const express = require("express");
const router = express.Router();
const controller = require("../Controller/userController");
router.post("/login", controller.userLogin);
router.post("/register", controller.registration);
module.exports = router;