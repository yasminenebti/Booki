const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const cors = require("cors");

mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("DB connection failed with -", err);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bookRoute = require("./Routes/BookRoute");
const userRoute = require("./Routes/userRoute");
const cartRoute = require("./Routes/CartRoute");


app.use("/api/book", bookRoute);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
