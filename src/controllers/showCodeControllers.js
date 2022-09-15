const { ShowTheCodes, UserShowTheCodes } = require("../models");

const showCodeControllers = {
  getUserShows: async (req, res) => {
    const { userId } = req.body;

    const user = await UserShowTheCodes.findAll({
      where: { UserId: userId },
      include: { all: true, nested: true },
    });
    res.status(200).json({ succes: true, res: user });
  },
};

module.exports = showCodeControllers;
