const express = require("express");

const router = express.Router();

const profileControllers = require("../controllers/profileControllers");

const { addProfile, getUser, getFormInfo } = profileControllers;

router.route("/users/profile").post(addProfile);
router.route("/profile/form").get(getFormInfo);

module.exports = router;
