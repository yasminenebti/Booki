const express = require("express");

const router = express.Router();

const CartRoute = require("../controller/CartController");
const auth = require("../middleware/auth");

router.post("/", auth, CartRoute.addToCart);
router.get("/", auth , CartRoute.getCart);
router.patch("/", auth, CartRoute.decreaseQuantity);
module.exports = router;
