const jwt = require("jsonwebtoken");
const mongoose=require("mongoose");
require("dotenv").config();
mongoose.connect("mongodb://0.0.0.0:27017/backend-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  module.exports={
    login: async (req, res) => {
        const { username, password } = req.body;
        if (
          username === process.env.ADMIN_USERNAME &&
          password === process.env.ADMIN_PASSWORD
        ) {
          //TODO store at .env
          const token = jwt.sign(
            { username: username },
            process.env.ADMIN_ACCESS_TOKEN_SECRET
          );
          res.status(200).json({
            status: "success",
            message: "Successfully logged in",
            data: { jwt_token: token },
          });
        } else {
          return res.status(404).json({ error: "Not an admin" });
        }
      },
  }