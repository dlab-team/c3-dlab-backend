"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserShowTheCode extends Model {
    static associate(models) {
      UserShowTheCode.belongsTo(models.ShowTheCode, {
        foreignKey: "ShowTheCodeId",
      });
      UserShowTheCode.belongsTo(models.User, {
        foreignKey: "UserId",
      });
    }
  }
  UserShowTheCode.init(
    {
      status: DataTypes.BOOLEAN,
      notes: DataTypes.TEXT,
      UserId: DataTypes.INTEGER,
      ShowTheCodeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserShowTheCode",
    }
  );
  return UserShowTheCode;
};
