'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkExperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WorkExperience.hasOne(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    }
  }
  WorkExperience.init({
    urlCv: DataTypes.STRING,
    urlLinkedin: DataTypes.STRING,
    urlGithub: DataTypes.STRING,
    urlBriefcase: DataTypes.STRING,
    details: DataTypes.TEXT,
    yearsExperience: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkExperience',
  });
  return WorkExperience;
};