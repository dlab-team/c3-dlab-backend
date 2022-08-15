'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAbilitie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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