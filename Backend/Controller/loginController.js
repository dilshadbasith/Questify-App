const User = require("../Models/userSchema");
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { joiUserSchema } = require("../Models/joiValidationSchema");
const contentschema = require("../Models/Question");
mongoose.connect("mongodb://0.0.0.0:27017/backend-project", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = {
  Login: async (req, res) => {
    const { value, error } = joiUserSchema.validate(req.body);
    const { username, password } = value;
    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
      ) {
        const token1 = jwt.sign(
          { username: username },
          process.env.ADMIN_ACCESS_TOKEN_SECRET
        );
        res.status(200).json({
          status: "success",
          message: "Admin Logged in",
          data: { jwt_token: token1 },
        });
      }else{

      
    const user = await User.findOne({ username: username });
    const checkPassword = await bcrypt.compare(password, user.password);
    const token = jwt.sign(
      { id:user._id },
      process.env.USER_ACCESS_TOKEN_SECRET,
      {
        expiresIn: 86400,
      }
    );
    if (error) {
      res.json(error.message);
    } else if (!user) {
      return res.json({ error: "User not found" });
    } else if (!password || !user.password) {
      return res.json({ status: "error", message: "invalid output" });
    } else if (!checkPassword) {
      res.json({ status: "error", message: "password incorrect" });
    }  else {
      res.status(200).json({
        status: "success",
        message: "Login successfull",
        data: token,
      });
    }
}
  }
};
