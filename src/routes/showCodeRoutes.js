const express = require("express");

const router = express.Router();

const showCodeControllers = require("../controllers/showCodeControllers");

const { getUserShows, getShows, acceptInvitation } = showCodeControllers;

router.route("/showthecode/user").post(getUserShows);
router.route("/showthecode").get(getShows);
router.route("/showthecode/accept").put(acceptInvitation);

module.exports = router;
