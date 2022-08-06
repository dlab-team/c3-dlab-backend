"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Framework extends Model {
    static associate(models) {
      Framework.hasMany(models.FrameworkLevel, {
        onDelete: "CASCADE",
      });
    }
  }
  Framework.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Framework",
    }
  );
  return Framework;
};
