"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LanguageLevel extends Model {
    static associate(models) {
      LanguageLevel.belongsTo(models.Language, {
        foreignKey: "LanguageId",
        //as: "Language",
      });
      LanguageLevel.belongsTo(models.User, {
        foreignKey: "UserId",
        as: "user",
      });
    }
  }
  LanguageLevel.init(
    {
      level: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "LanguageLevel",
    }
  );
  return LanguageLevel;
};
