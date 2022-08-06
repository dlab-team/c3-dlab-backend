"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tool extends Model {
    static associate(models) {
      Tool.hasMany(models.ToolLevel, {
        onDelete: "CASCADE",
      });
    }
  }
  Tool.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tool",
    }
  );
  return Tool;
};
