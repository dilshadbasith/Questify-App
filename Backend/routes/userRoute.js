const express = require("express");
const router = express.Router();
const controller = require("../Controller/userController");
router.post("/login", controller.userLogin);
router.post("/register", controller.registration);
router.post("/like",controller.setLike)
module.exports = router;