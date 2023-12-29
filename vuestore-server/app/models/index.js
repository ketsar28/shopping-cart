const mongoose = require("mongoose");
const dbConfig = require("../../config/dbconfig");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require("./product.model")(mongoose); // untuk mengirimkan argument 'mongoose' ke dalam parameter dari si product.modelnya
db.orders = require("../models/order.model")(mongoose);

module.exports = db;
