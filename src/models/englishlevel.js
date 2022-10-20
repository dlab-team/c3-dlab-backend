'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnglishLevel extends Model {
    static associate(models) {
      EnglishLevel.hasOne(models.UserEnglishLevel);
    }
  }
  EnglishLevel.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EnglishLevel',
  });
  return EnglishLevel;
};