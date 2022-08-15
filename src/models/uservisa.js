'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserVisa extends Model {
    static associate(models) {
      UserVisa.belongsTo(models.Visa, { foreignKey: "VisaId" }); 
      UserVisa.belongsTo(models.WorkExperience, { foreignKey: "WorkExperienceId" });
    }
  }
  UserVisa.init({
    VisaId: DataTypes.INTEGER,
    WorkExperienceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserVisa',
  });
  return UserVisa;
};