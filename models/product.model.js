const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    nameOfPart: {
      type: String,
      require: [true, "Product name is required, please enter"],
    },
    modelOfCar: {
      type: String,
      require: true,
    },
    yearOfModel: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantityInStock: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
