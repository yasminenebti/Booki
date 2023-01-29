const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    name: { type: String, maxlength: 50, required: true },
    author: { type: String, required: true, maxlength: 150 },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    genre: { type: String, required: true },
    checked: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Book", BookSchema);
