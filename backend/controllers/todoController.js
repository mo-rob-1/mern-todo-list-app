const asyncHandler = require("express-async-handler");

const Todo = require("../models/todoModel");

// @desc  Get todos
// @route GET /api/todo
// @access Private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();

  res.status(200).json(todos);
});

// @desc  Set todo
// @route POST /api/todo
// @access Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.todo) {
    res.status(400);
    throw new Error("Text is required");
  }

  const todo = await Todo.create({
    todo: req.body.todo,
  });

  res.status(200).json(todo);
});

// @desc  Update todo
// @route PUT /api/todo/:id
// @access Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTodo);
});

// @desc  Delete todo
// @route DELETE /api/todo/:id
// @access Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  await todo.remove();

  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
};
