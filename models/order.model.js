const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, "Customer name is required, please enter"],
    },
    customerEmail: {
      type: String,
      required: [true, "Customer email is required, please enter"],
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
