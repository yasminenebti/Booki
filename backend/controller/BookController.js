const Book = require("../models/BookModel");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ books: books });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const createBook = async (req, res) => {
  const newBook = new Book({
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    genre: req.body.genre,
  });
  try {
    const savedBook = await newBook.save();
    return res.status(201).json({ Book: savedBook });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getBooks = getBooks;
module.exports.createBook = createBook;
