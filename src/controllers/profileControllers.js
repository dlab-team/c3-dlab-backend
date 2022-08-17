const {
  EducationLevel,
  Framework,
  FrameworkLevel,
  Language,
  LanguageLevel,
  ProfessionalPosition,
  Study,
  Tool,
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
      employmentStatus,
      idealJob,
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
          employmentStatus: employmentStatus,
          idealJob: idealJob,
        },
        { where: { id: userId } }
      );
      await WorkExperience.create({
        UserId: userId,
        urlCv: urlCv,
        urlLinkedin: urlLinkedin,
        urlGithub: urlGithub,
        urlPortfolio: urlPortfolio,
        details: details,
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
  getFormInfo: async (req, res) => {
    const edLevels = await EducationLevel.findAll({
      attributes: ["id", "name"],
    });
    const frameworks = await Framework.findAll({ attributes: ["id", "name"] });
    const languages = await Language.findAll({ attributes: ["id", "name"] });
    const tools = await Tool.findAll({ attributes: ["id", "name"] });
    const professionalPositions = await ProfessionalPosition.findAll({
      attributes: ["id", "name"],
    });

    res.status(200).json({
      res: { edLevels, frameworks, languages, professionalPositions, tools },
    });
  },
};

module.exports = profileControllers;
