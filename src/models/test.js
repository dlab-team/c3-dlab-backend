"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Test.hasMany(models.UserTest);
    }
  }
  Test.init(
    {
      category: DataTypes.STRING,
      name: DataTypes.STRING,
      time: DataTypes.INTEGER,
      role: DataTypes.STRING,
      difficulty: DataTypes.STRING,
      link: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Test",
    }
  );
  return Test;
};
