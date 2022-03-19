const asyncHandler = require("express-async-handler");

// @desc  Get todos
// @route GET /api/todo
// @access Private
const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get todos",
  });
});

// @desc  Set todo
// @route POST /api/todo
// @access Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Text is required");
  }

  res.status(200).json({
    message: "Set todo",
  });
});

// @desc  Update todo
// @route PUT /api/todo/:id
// @access Private
const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update todo ${req.params.id}`,
  });
});

// @desc  Delete todo
// @route DELETE /api/todo/:id
// @access Private
const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete todo ${req.params.id}`,
  });
});

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
};
