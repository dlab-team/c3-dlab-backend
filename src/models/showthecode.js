'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShowTheCode extends Model {
    static associate(models) {
      ShowTheCode.hasMany(models.UserShowTheCode);
    }
  }
  ShowTheCode.init({
    date: DataTypes.DATE,
    company: DataTypes.STRING,
    type: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShowTheCode',
  });
  return ShowTheCode;
};