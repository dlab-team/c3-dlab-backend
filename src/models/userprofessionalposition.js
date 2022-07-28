"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProfessionalPosition extends Model {
    static associate(models) {
      UserProfessionalPosition.belongsTo(models.ProfessionalPosition, {
        foreignKey: "ProfessionalPositionId",
        as: "Position",
      });
      UserProfessionalPosition.belongsTo(models.User, {
        foreignKey: "UserId",
        as: "User",
      });
    }
  }
  UserProfessionalPosition.init(
    {},
    {
      sequelize,
      modelName: "UserProfessionalPosition",
    }
  );
  return UserProfessionalPosition;
};
