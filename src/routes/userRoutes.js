const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const userControllers = require("../controllers/userControllers");
const { signUp } = userControllers;

router.route("/signup").post(signUp);

module.exports = router;
