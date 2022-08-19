"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SoftSkill extends Model {
    static associate(models) {
      SoftSkill.hasMany(models.UserSoftSkill);
    }
  }
  SoftSkill.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SoftSkill",
    }
  );
  return SoftSkill;
};
