'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserJob extends Model {
    static associate(models) {
      UserJob.belongsTo(models.Job, { foreignKey: "JobId" }); // HasMany?
      UserJob.belongsTo(models.WorkExperience, { foreignKey: "WorkExperienceId" });
    }
  }
  UserJob.init({
    JobId: DataTypes.INTEGER,
    WorkExperienceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserJob',
  });
  return UserJob;
};