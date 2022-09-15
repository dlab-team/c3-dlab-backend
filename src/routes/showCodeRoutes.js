const express = require("express");

const router = express.Router();

const showCodeControllers = require("../controllers/showCodeControllers");

const { getUserShows } = showCodeControllers;

router.route("showthecode/user").post(getUserShows);

module.exports = router;
