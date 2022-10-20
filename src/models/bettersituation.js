'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BetterSituation extends Model {
    static associate(models) {
      BetterSituation.hasOne(models.UserBetterSituation);
    }
  }
  BetterSituation.init(
    {
      name: DataTypes.STRING
    }, 
    {
      sequelize,
      modelName: 'BetterSituation',
    }
  );
  return BetterSituation;
};