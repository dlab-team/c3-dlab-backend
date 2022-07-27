"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WorkExperience extends Model {
    static associate(models) {
      WorkExperience.belongsTo(models.User, {
        foreignKey: "UserId",
        as: "user",
      });
    }
  }
  WorkExperience.init(
    {
      urlCv: DataTypes.STRING,
      urlLinkedin: DataTypes.STRING,
      urlGithub: DataTypes.STRING,
      urlPortfolio: DataTypes.STRING,
      details: DataTypes.TEXT,
      yearsExperience: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "WorkExperience",
    }
  );
  return WorkExperience;
};
