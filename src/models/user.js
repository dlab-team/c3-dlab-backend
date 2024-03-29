"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.WorkExperience);
      User.hasMany(models.Study);
      User.hasMany(models.UserProfessionalPosition);
      User.hasMany(models.LanguageLevel);
      User.hasMany(models.FrameworkLevel);
      User.hasMany(models.ToolLevel);
      User.hasMany(models.UserJob);
      User.hasMany(models.UserSoftSkill);
      User.hasMany(models.UserVisa);
      User.hasMany(models.UserShowTheCode);
      User.belongsTo(models.EducationLevel, {
        foreignKey: "EducationLevelId",
        as: "Education level",
      });
      User.hasMany(models.UserEnglishLevel);
      User.hasMany(models.UserCurrentSituation);
      User.hasMany(models.UserBetterSituation);
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      gender: DataTypes.STRING,
      employmentStatus: DataTypes.STRING,
      idealJob: DataTypes.TEXT,
      skill: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
