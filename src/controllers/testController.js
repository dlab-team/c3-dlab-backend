const { Test, UserTest } = require("../models");

const testController = {
  getUsertests: async (req, res) => {
    const { userId } = req.body;

    const userTests = await UserTest.findAll({
      where: { UserId: userId },
      include: [
        {
          model: Test,
        },
      ],
    });
    if (userTests.length !== 0) {
      res.status(200).json({ succes: true, res: userTests });
    } else {
      res.status(204).json({});
    }
  },
  getTests: async (req, res) => {
    const tests = await Test.findAll();
    res.status(200).json({ succes: true, res: tests });
  },
};

module.exports = testController;
