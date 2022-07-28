const {
  LanguageLevel,
  Study,
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
      studyName,
      studyInstitution,
      studyInstitutionType,
      studies,
      positions,
      languages,
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
        },
        { where: { id: userId } }
      );
      const workExperience = await WorkExperience.create({
        UserId: userId,
        urlCv: urlCv,
        urlLinkedin: urlLinkedin,
        urlGithub: urlGithub,
        urlPortfolio: urlPortfolio,
        detail: details,
        yearsExperience: yearsExperience,
      });

      const study = await Study.bulkCreate(studies);
      const userPosition = await UserProfessionalPosition.bulkCreate(positions);
      await LanguageLevel.bulkCreate(languages);
      await res.json({ user });
    }
  },
  getUser: async (req, res) => {
    const { userId } = req.body;

    const user = await User.findAll({ include: { all: true, nested: true } });

    res.json({ user });
  },
};

module.exports = profileControllers;
