'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAbilitie extends Model {
    static associate(models) {
      UserAbilitie.belongsTo(models.Abilitie, { foreignKey: "AbilitieId" }); 
      UserAbilitie.belongsTo(models.WorkExperience, { foreignKey: "WorkExperienceId" });
    }
  }
  UserAbilitie.init({
    AbilitieId: DataTypes.INTEGER,
    WorkExperienceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserAbilitie',
  });
  return UserAbilitie;
};