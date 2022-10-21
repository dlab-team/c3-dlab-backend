"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserTest.belongsTo(models.Test, {
        foreignKey: "TestId",
      });
      UserTest.belongsTo(models.User, {
        foreignKey: "UserId",
      });
    }
  }
  UserTest.init(
    {
      status: DataTypes.BOOLEAN,
      score: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      TestId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserTest",
    }
  );
  return UserTest;
};
