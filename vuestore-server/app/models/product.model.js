module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    name: String,
    price: Number,
    code: String,
    description: String,
    imageUrl: String,
    averageRating: Number,
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Product = mongoose.model("products", schema);
  return Product;
};

