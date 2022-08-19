"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserVisa extends Model {
    static associate(models) {
      UserVisa.belongsTo(models.Visa, { foreignKey: "VisaId" });
      UserVisa.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  UserVisa.init(
    {
      VisaId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserVisa",
    }
  );
  return UserVisa;
};
