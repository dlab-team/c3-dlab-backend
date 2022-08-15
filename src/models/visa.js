'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visa extends Model {
    static associate(models) {
      Visa.hasMany(models.UserVisa);
    }
  }
  Visa.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Visa',
  });
  return Visa;
};