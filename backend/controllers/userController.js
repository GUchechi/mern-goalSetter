const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  res.json({ message: "Register User" });
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = (req, res) => {
  res.json({ message: "Get User Data Display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
