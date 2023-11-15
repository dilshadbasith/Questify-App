const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function verifyToken(req, res, next) {
  const token = req.headers["authorization"].split(" ")[1]
  console.log(token)
  if (!token) {
    return res.status(403).json({ error: "no token provided" });
  }
  jwt.verify(token, process.env.USER_ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "unauthorized" });
    }
    req.username = decoded.username;
    res.user = decoded.id
    next();
  });
};