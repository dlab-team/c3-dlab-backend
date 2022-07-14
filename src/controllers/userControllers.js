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
    res
      .status(201)
      .json({ succes: true, res: { email: user.email, id: user.id } });
  },
  signIn: async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({
      where: { email: email },
    });

    if (!existingUser) {
      res.status(401).json({ succes: false, message: "User was not founded" });
    }
    const passwordMatch = await bcrypt.compareSync(
      password,
      existingUser.password
    );

    if (passwordMatch) {
      const userJwt = jwt.sign(
        {
          id: existingUser.id,
          email: existingUser.email,
        },
        process.env.JWT_KEY
      );

      // Guarda jwt en cookie
      req.session.jwt = userJwt;
      res.status(200).json({
        succes: true,
        res: { email: existingUser.email, id: existingUser.id },
      });
    } else {
      res.json({ succes: false, message: "Wrong password provided." });
    }
  },
  currentUser: async (req, res) => {
    if (!req.session?.jwt) {
      return res.send({ currentUser: null });
    }
    try {
      const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
      res.send({ currentUser: payload });
    } catch (err) {
      res.send({ currentUser: null });
    }
  },
  signOut: async (req, res) => {
    req.session = null;
    res.send({});
  },
};

module.exports = userControllers;