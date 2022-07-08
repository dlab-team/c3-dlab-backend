const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const User = require("../models/user");

const userControllers = {
  signUp: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.create({
      email,
      password,
    });
    res.json({
      success: true,
      res: {
        email: email,
        password: password,
      },
    });
  },
};

module.exports = userControllers;
