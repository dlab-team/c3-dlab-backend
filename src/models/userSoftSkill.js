"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserSoftSkill extends Model {
    static associate(models) {
      UserSoftSkill.belongsTo(models.SoftSkill, { foreignKey: "SoftSkillId" });
      UserSoftSkill.belongsTo(models.User, {
        foreignKey: "UserId",
      });
    }
  }
  UserSoftSkill.init(
    {
      SoftSkillId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserSoftSkill",
    }
  );
  return UserSoftSkill;
};
