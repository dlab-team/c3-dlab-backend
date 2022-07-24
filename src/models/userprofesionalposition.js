'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfesionalPosition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfesionalPosition.BelongsTo(models.ProfesionalPosition, {
        foreignKey: 'skillId'
      });
      UserProfesionalPosition.BelongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }
  UserProfesionalPosition.init({
    userId: DataTypes.INTEGER,
    profesionalPositionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserProfesionalPosition',
  });
  return UserProfesionalPosition;
};