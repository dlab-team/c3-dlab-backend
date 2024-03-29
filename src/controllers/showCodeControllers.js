const { ShowTheCode, UserShowTheCode } = require("../models");

const showCodeControllers = {
  getUserShows: async (req, res) => {
    const { userId } = req.body;

    const userShows = await UserShowTheCode.findAll({
      where: { UserId: userId },
      include: [
        {
          model: ShowTheCode,
        },
      ],
    });
    if (userShows.length !== 0) {
      res.status(200).json({ succes: true, res: userShows });
    } else {
      res.status(204).json({});
    }
  },
  getShows: async (req, res) => {
    const shows = await ShowTheCode.findAll();
    res.status(200).json({ succes: true, res: shows });
  },
};

module.exports = showCodeControllers;
