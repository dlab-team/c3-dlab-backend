const { Study, User, WorkExperience } = require("../models");

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
      /* const study = await Study.bulkCreate({
        UserId: userId,
        name: studyName,
        insitution: studyInstitution,
        intitutionType: studyInstitutionType,
      }); */

      const study = await Study.bulkCreate(studies);

      res.json({ user });
    }
  },
  getUser: async (req, res) => {
    const { userId } = req.body;
    /* const user = await User.findByPk(userId, {
      include: { all: true, nested: true },
    }); */
    const user = await User.findAll({ include: { all: true, nested: true } });

    res.json({ user });
  },
};

module.exports = profileControllers;
