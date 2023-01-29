const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ msg: "This email already exists" });
    if (req.body.password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password should be at least 6 characters long" });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.ACCESS_TOKEN, {
      expiresIn: "2 days",
    });

    return res.status(201).json({ token: token, user: savedUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(403).json({ message: "Wrong email" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(403).json({ message: "Wrong password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN, {
      expiresIn: "2 days",
    });
    return res.status(200).json({ token: token, user: user });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
