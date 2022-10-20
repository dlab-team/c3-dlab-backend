'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBetterSituation extends Model {
    static associate(models) {
      UserBetterSituation.belongsTo(models.BetterSituation, { foreignKey: "BetterSituationId" });
      UserBetterSituation.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  UserBetterSituation.init(
    {
      BetterSituationId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER
    }, 
    {
      sequelize,
      modelName: 'UserBetterSituation',
    }
  );
  return UserBetterSituation;
};