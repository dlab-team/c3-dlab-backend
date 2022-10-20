'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserEnglishLevel extends Model {
    static associate(models) {
      UserEnglishLevel.belongsTo(models.EnglishLevel, { foreignKey: "EnglishLevelId" });
      UserEnglishLevel.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  UserEnglishLevel.init(
    {
      EnglishLevelId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'UserEnglishLevel',
    });
  return UserEnglishLevel;
};