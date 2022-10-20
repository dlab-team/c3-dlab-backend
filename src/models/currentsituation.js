'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CurrentSituation extends Model {
    static associate(models) {
      CurrentSituation.hasOne(models.UserCurrentSituation);
    }
  }
  CurrentSituation.init(
    {
      name: DataTypes.STRING
    }, 
    {
      sequelize,
      modelName: 'CurrentSituation',
    }
  );
  return CurrentSituation;
};