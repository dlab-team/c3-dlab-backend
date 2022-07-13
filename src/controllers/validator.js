const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    email: joi
      .string()
      .trim()
      .email()
      .required()
      .messages({ "string.empty": "An email must be provided" }),
    password: joi.string().trim().required().min(8).messages({
      "string.empty": "A password must be provided",
      "string.min": "The password must be at least 8 characters long",
    }),
  });
  const validation = schema.validate(req.body, { abortEarly: false });
  if (!validation.error) {
    next();
  } else {
    res.json({ success: false, res: validation.error.details });
  }
};

module.exports = validator;
