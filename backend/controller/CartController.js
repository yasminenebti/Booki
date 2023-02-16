const Cart = require("../models/CartModel");
const Book = require("../models/BookModel");

const getCart = async (req, res) => {
  const userId = req.verifiedUser.id;

  try {
    const cart = await Cart.findOne({ userId });
    return res.status(200).json({ cart: cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addToCart = async (req, res) => {
  const userId = req.verifiedUser.id;
  const { bookId } = req.body;
  const book = await Book.findById(bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  let cart = await Cart.findOne({ userId });

  if (cart) {
    let itemIndex = cart.books.findIndex((item) => item.bookId == bookId);

    if (itemIndex > -1) {
      let bookItem = cart.books[itemIndex];
      bookItem.quantity += 1;
      bookItem.price = Math.round(bookItem.quantity * book.price);
      cart.books[itemIndex] = bookItem;
    } else {
      cart.books.push({
        bookId: bookId,
        quantity: 1,
        price: book.price,
        name: book.name,
        author: book.author,
        image: book.image,
      });
    }

    cart = await cart.save();
    return res.status(200).send({ cart });
  } else {
    const newCart = await Cart.create({
      userId: userId,
      books: [
        {
          bookId: bookId,
          quantity: 1,
          price: book.price,
          name: book.name,
          author: book.author,
          image: book.image,
        },
      ],
    });

    return res.status(201).send({ newCart });
  }
};

const decreaseQuantity = async (req, res) => {
  let userId = req.user._id;
  const { bookId } = req.body;
  const book = await Book.findById(bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  let cart = await Cart.findOne({ userId });
  if (!cart) {
    return res.status(404).send("cart not found");
  } else {
    const itemIndex = cart.books.findIndex((book) => book.bookId == bookId);
    if (itemIndex > -1) {
      let bookItem = cart.books[itemIndex];
      if (bookItem.quantity > 0) {
        bookItem.quantity--;
        bookItem.price = bookItem.quantity * book.price;
        cart.books[itemIndex] = bookItem;

        cart = await cart.save();
        return res.status(200).send({ cart });
      } else {
        delete cart.books[itemIndex];
        return res.status(200).send({ cart });
      }
    } else {
      //product does not exists in cart, add new item
      return res.status(404).send("item not found");
    }
  }
};

module.exports.addToCart = addToCart;
module.exports.getCart = getCart;
module.exports.decreaseQuantity = decreaseQuantity;
