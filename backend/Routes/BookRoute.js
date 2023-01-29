const express = require("express");
const router = express.Router();

const BookRoutes = require("../controller/BookController");

router.get("/", BookRoutes.getBooks);
router.post("/", BookRoutes.createBook);
module.exports = router;
