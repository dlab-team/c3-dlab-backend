const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/userControllers");
const profileControllers = require("../controllers/profileControllers");
const validator = require("../controllers/validator");

const { signUp, signIn, currentUser, signOut } = userControllers;
const { addProfile, getUser } = profileControllers;

router.route("/users/signup").post(validator, signUp);
router.route("/users/signin").post(validator, signIn);
router.route("/users/signout").post(signOut);
router.route("/users/currentuser").get(currentUser);
router.route("/users/profile").post(addProfile);
router.route("/users/get").post(getUser);

module.exports = router;
