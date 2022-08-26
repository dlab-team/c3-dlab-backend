'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserShowTheCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserShowTheCode.init({
    status: DataTypes.BOOLEAN,
    notes: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    showTheCodeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserShowTheCode',
  });
  return UserShowTheCode;
};