"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EducationLevel extends Model {
    static associate(models) {
      EducationLevel.hasOne(models.User);
    }
  }
  EducationLevel.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EducationLevel",
    }
  );
  return EducationLevel;
};
