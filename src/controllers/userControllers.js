const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const { User } = require("../models");

const userControllers = {
  signUp: async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    res.json({
      success: true,
      res: {
        email: email,
        password: hashedPassword,
      },
    });
  },
};

module.exports = userControllers;
