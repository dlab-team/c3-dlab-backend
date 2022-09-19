'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCurrentSituation extends Model {
    static associate(models) {
      UserCurrentSituation.belongsTo(models.CurrentSituation, { foreignKey: "CurrentSituationId" });
      UserCurrentSituation.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  UserCurrentSituation.init(
    {
      CurrentSituationId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER
    }, 
    {
      sequelize,
      modelName: 'UserCurrentSituation',
    });
  return UserCurrentSituation;
};