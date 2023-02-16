const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/userModel");
const userRoute = require("../controller/userController");

router.get("/authcheck", auth, async (req, res) => {
  try {
    const user = await User.findById(req.verifiedUser.id);
    return res.status(200).json({ user: user });
  } catch (error) {
    return res.status(500).json({ message: message.error });
  }
});

router.post("/register", userRoute.createUser);
router.post("/login", userRoute.loginUser);

module.exports = router;
