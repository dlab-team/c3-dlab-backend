const express = require("express");

const router = express.Router();

const testController = require("../controllers/testController");

const { getUserTests, getTests } = testController;

router.route("/tests/user").post(getUserTests);
router.route("/tests").get(getTests);

module.exports = router;
