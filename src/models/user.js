"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.WorkExperience, { onDelete: "CASCADE" });
      User.hasMany(models.Study, { onDelete: "CASCADE" });
      User.hasMany(models.UserProfessionalPosition, { onDelete: "CASCADE" });
      User.hasMany(models.LanguageLevel, { onDelete: "CASCADE" });
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
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
