const {
  EducationLevel,
  Framework,
  FrameworkLevel,
  Job,
  Language,
  LanguageLevel,
  ProfessionalPosition,
  SoftSkill,
  Study,
  Tool,
  ToolLevel,
  User,
  UserJob,
  UserProfessionalPosition,
  UserSoftSkill,
  UserVisa,
  Visa,
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
      visas,
      jobs,
      softSkills,
    } = req.body;
    const userExists = await User.findOne({
      where: { id: userId },
    });
    if (userExists) {
      try {
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
        await UserJob.bulkCreate(jobs);
        await UserSoftSkill.bulkCreate(softSkills);
        await UserVisa.bulkCreate(visas);

        res.status(200).json({ success: true, message: "Profile updated" });
      } catch (error) {
        res.json(error);
      }
    } else {
      res.status(400).json({ success: false });
    }
  },
  getUser: async (req, res) => {
    const { userId } = req.body;

    const user = await User.findAll({
      where: { id: userId },
      //include: { all: true, nested: true },
      include: [
        { model: WorkExperience },
        {
          model: Study,
          attributes: ["id", "name", "institution", "institutionType"],
        },
        {
          model: UserProfessionalPosition,
          attributes: ["ProfessionalPositionId"],
          include: {
            model: ProfessionalPosition,
            //as: "Position",
            attributes: ["name"],
          },
        },
        {
          model: LanguageLevel,
          attributes: ["LanguageId", "level"],
          include: { model: Language, attributes: ["name"] },
        },
        {
          model: FrameworkLevel,
          attributes: ["FrameworkId", "level"],
          include: { model: Framework, attributes: ["name"] },
        },
        {
          model: ToolLevel,
          attributes: ["ToolId", "level"],
          include: { model: Tool, attributes: ["name"] },
        },
        {
          model: UserJob,
          attributes: ["JobId", "UserId"],
          include: { model: Job, attributes: ["name"] },
        },
        {
          model: UserSoftSkill,
          attributes: ["SoftSkillId", "UserId"],
          include: { model: SoftSkill, attributes: ["name"] },
        },
        {
          model: UserVisa,
          attributes: ["VisaId", "UserId"],
          include: { model: Visa, attributes: ["name"] },
        },
      ],
      attributes: [
        "id",
        "email",
        "name",
        "lastName",
        "phone",
        "city",
        "country",
        "gender",
        "employmentStatus",
        "idealJob",
        "EducationLevelId",
      ],
    });
    if (user) {
      res.status(200).json({ success: true, res: user });
    } else {
      res.status(400).json({ success: false, message: "User was not found" });
    }
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
    const jobs = await Job.findAll({ attributes: ["id", "name"] });
    const softSkills = await SoftSkill.findAll({ attributes: ["id", "name"] });
    const visas = await Visa.findAll({ attributes: ["id", "name"] });

    res.status(200).json({
      succes: true,
      res: {
        edLevels,
        frameworks,
        languages,
        professionalPositions,
        tools,
        jobs,
        softSkills,
        visas,
      },
    });
  },
};

module.exports = profileControllers;
