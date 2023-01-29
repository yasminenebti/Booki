const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, required: true },
    role: { type: Number, default: 0 },
    cart: { type: Array, default: [] },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
