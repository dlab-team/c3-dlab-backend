"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Study extends Model {
    static associate(models) {
      Study.belongsTo(models.User, {
        foreignKey: "UserId",
        as: "user",
      });
    }
  }
  Study.init(
    {
      name: DataTypes.STRING,
      institution: DataTypes.STRING,
      institutionType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Study",
    }
  );
  return Study;
};
