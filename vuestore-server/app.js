const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static(path.join(__dirname, "./public/img")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // Ganti dengan domain frontend Anda
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const db = require("./app/models");
mongoose
  .connect(db.url)
  .then((result) => {
    console.log("successfully connected to database mongodb");
  })
  .catch((err) => {
    console.log("cannot connect to database mongodb", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Root Page",
  });
});

require("./app/routes/product.route")(app);
require("./app/routes/order.route")(app);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found - 404");
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
