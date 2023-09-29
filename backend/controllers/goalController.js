const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Goal = require("../models/goalModel");

// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc   Set goals
// @route  POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc   Update goals
// @route  PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Goal" });
  }

  const goal = await Goal.findById(id);

  if (!goal) {
    return next(new Error("No such Goal"));
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc   Delete goals
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Goal" });
  }

  const goal = await Goal.findById(id);

  const deletedGoal = await Goal.findOneAndDelete({ _id: id });

  if (!goal) {
    return res.status(400).json({ error: "No such goal" });
  }

  res.status(200).json(deletedGoal);
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
