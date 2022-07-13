const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/userControllers");
const validator = require("../controllers/validator");

const { signUp, signIn } = userControllers;

router.route("/users/signup").post(validator, signUp);
router.route("/users/signin").post(signIn);

module.exports = router;
