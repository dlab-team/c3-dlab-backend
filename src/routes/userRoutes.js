const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/userControllers");
const validator = require("../controllers/validator");

const { signUp, signIn, currentUser, signOut } = userControllers;

router.route("/users/signup").post(validator, signUp);
router.route("/users/signin").post(validator, signIn);
router.route("/users/signout").post(signOut);
router.route("/users/currentuser").get(currentUser);

module.exports = router;
