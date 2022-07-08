'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    genre: DataTypes.STRING,
    jobStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};