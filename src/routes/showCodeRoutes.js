const express = require("express");

const router = express.Router();

const showCodeControllers = require("../controllers/showCodeControllers");

const { getUserShows, getShows } = showCodeControllers;

router.route("/showthecode/user").post(getUserShows);
router.route("/showthecode").get(getShows);

module.exports = router;
