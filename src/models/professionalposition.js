"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProfessionalPosition extends Model {
    static associate(models) {
      ProfessionalPosition.hasMany(models.UserProfessionalPosition, {
        onDelete: "CASCADE",
      });
    }
  }
  ProfessionalPosition.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProfessionalPosition",
    }
  );
  return ProfessionalPosition;
};
