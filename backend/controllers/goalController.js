// @desc Get goals
// @route GET /api/goal
// @access Private

const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc Set goals
// @route POST /api/goal
// @access Private

const setGoal = (req, res) => {
  if (!req.body.text) {
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goals" });
};

// @desc Update goal
// @route PUT /api/goal/:id
// @access Private

const updateGoal = (req, res) => {
  res.status(200).json({ message: "Update goals" });
};

// @desc Delete goals
// @route DELETE /api/goal/:id
// @access Private

const deleteGoal = (req, res) => {
  res.status(200).json({ message: "Delete goals" });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
