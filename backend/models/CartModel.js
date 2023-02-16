const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    books: [
      {
        bookId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Book",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: { type: Number },
        name: { type: String, maxlength: 50, required: true },
        author: { type: String, required: true, maxlength: 150 },
        image: { type: String, required: true },
      },
    ],

    total: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
