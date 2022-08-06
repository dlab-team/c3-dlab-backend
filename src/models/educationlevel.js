"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EducationLevel extends Model {
    static associate(models) {
      EducationLevel.hasOne(models.User, {
        onDelete: "CASCADE",
      });
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
