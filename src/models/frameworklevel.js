"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FrameworkLevel extends Model {
    static associate(models) {
      FrameworkLevel.belongsTo(models.Framework, { foreignKey: "FrameworkId" });
      FrameworkLevel.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  FrameworkLevel.init(
    {
      level: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "FrameworkLevel",
    }
  );
  return FrameworkLevel;
};
