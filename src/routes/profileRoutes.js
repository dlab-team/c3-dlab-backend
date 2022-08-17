const express = require("express");

const router = express.Router();

const profileControllers = require("../controllers/profileControllers");

const { addProfile, getUser, getFormInfo } = profileControllers;

router.route("/profile/adduser").put(addProfile);
router.route("/profile/form").get(getFormInfo);
router.route("/profile/getuser").post(getUser);

module.exports = router;
