const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("access_token");
    if (!token) return res.status(401).json("access denied");

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) return res.status(400).json("Invalid authentication");
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = auth;
