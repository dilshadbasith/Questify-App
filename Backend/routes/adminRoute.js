const express = require("express");
const router = express.Router();
const controller = require("../Controller/adminController");
//router.post("/login", controller.login);
router.get("/getuser", controller.getUsers);

module.exports = router;