"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ToolLevel extends Model {
    static associate(models) {
      ToolLevel.belongsTo(models.Tool, { foreignKey: "ToolId" });
      ToolLevel.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  ToolLevel.init(
    {
      level: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ToolLevel",
    }
  );
  return ToolLevel;
};
