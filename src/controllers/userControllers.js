const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

const userControllers = {
  signUp: async (req, res) => {
    const { email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    const repeatedUser = await User.findOne({ where: { email: email } });

    if (!repeatedUser) {
      const user = await User.create(
        {
          email,
          password: hashedPassword,
        },
        { fields: ["email", "password"] }
      );
      const userJwt = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_KEY
      );

      // Guarda jwt en cookie
      req.session.jwt = userJwt;
      res
        .status(201)
        .json({ success: true, res: { email: user.email, id: user.id } });
    } else {
      res.status(400).json({ succes: false, message: "email already in use" });
    }
  },
  signIn: async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({
      where: { email: email },
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
        "password",
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

    if (existingUser) {
      const passwordMatch = await bcrypt.compareSync(
        password,
        existingUser.password
      );

      if (passwordMatch) {
        const userJwt = jwt.sign(
          {
            id: existingUser.id,
            email: existingUser.email,
          },
          process.env.JWT_KEY
        );

        // Guarda jwt en cookie
        req.session.jwt = userJwt;
        res.status(200).json({
          success: true,
          //res: { email: existingUser.email, id: existingUser.id },
          res: { existingUser },
        });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Wrong password provided." });
      }
    } else {
      res.status(404).json({ success: false, message: "User was not found" });
    }
  },
  currentUser: async (req, res) => {
    if (!req.session?.jwt) {
      return res.send({ currentUser: null });
    }
    try {
      const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
      const user = await User.findOne({
        where: { id: payload.id },
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
      res.status(200).json({ succes: true, res: user });
    } catch (err) {
      res.send({ currentUser: null });
    }
  },
  signOut: async (req, res) => {
    req.session = null;
    res.send({});
  },
};

module.exports = userControllers;
