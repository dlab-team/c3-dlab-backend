const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../models");

const userControllers = {
  signUp: async (req, res) => {
    const { email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create(
      {
        email,
        password: hashedPassword,
      },
      { fields: ["email", "password"] }
    );
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY
    );

    // Guarda jwt en cookie
    req.session.jwt = userJwt;
    res.status(201).send(user);
  },
  signIn: async (req, res) => {},
};

module.exports = userControllers;
