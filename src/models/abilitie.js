'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Abilitie extends Model {
    static associate(models) {
      Abilitie.hasMany(models.UserAbilitie);
    }
  }
  Abilitie.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Abilitie',
  });
  return Abilitie;
};