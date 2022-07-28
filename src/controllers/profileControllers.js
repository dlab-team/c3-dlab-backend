const {
  FrameworkLevel,
  LanguageLevel,
  Study,
  ToolLevel,
  User,
  UserProfessionalPosition,
  WorkExperience,
} = require("../models");

const profileControllers = {
  addProfile: async (req, res) => {
    const {
      userId,
      name,
      lastName,
      phone,
      city,
      country,
      gender,
      urlCv,
      urlLinkedin,
      urlGithub,
      urlPortfolio,
      details,
      yearsExperience,
      educationLevelId,
      studies,
      positions,
      languages,
      frameworks,
      tools,
    } = req.body;
    const userExists = await User.findOne({
      where: { id: userId },
    });
    if (userExists) {
      const user = await User.update(
        {
          name: name,
          lastName: lastName,
          phone: phone,
          city: city,
          country: country,
          gender: gender,
          EducationLevelId: educationLevelId,
          Availabilities: availability,
        },
        { where: { id: userId } }
      );
      await WorkExperience.create({
        UserId: userId,
        urlCv: urlCv,
        urlLinkedin: urlLinkedin,
        urlGithub: urlGithub,
        urlPortfolio: urlPortfolio,
        detail: details,
        yearsExperience: yearsExperience,
      });

      await Study.bulkCreate(studies);
      await UserProfessionalPosition.bulkCreate(positions);
      await LanguageLevel.bulkCreate(languages);
      await FrameworkLevel.bulkCreate(frameworks);
      await ToolLevel.bulkCreate(tools);

      await res.json({ user });
    }
  },
  getUser: async (req, res) => {
    const { userId } = req.body;

    const user = await User.findAll({
      where: { id: userId },
      include: { all: true, nested: true },
    });

    res.json({ user });
  },
};

module.exports = profileControllers;
