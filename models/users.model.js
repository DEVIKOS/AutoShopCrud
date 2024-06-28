const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "user name is required, please enter"],
    },
    dateOfBirth: {
      type: String,
      require: true,
    },
    spentMoney: {
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

const User = mongoose.model("User", UserSchema);

module.exports = User;
