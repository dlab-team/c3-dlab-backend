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
      User.belongsTo(models.EducationLevel, {
        foreignKey: "EducationLevelId",
        as: "Education level",
      });
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
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
