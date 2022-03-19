const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: [true, "Please add a to-do item"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
