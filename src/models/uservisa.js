'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserVisa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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