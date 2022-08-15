'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    static associate(models) {
      Job.hasMany(models.UserJob);
    }
  }
  Job.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};