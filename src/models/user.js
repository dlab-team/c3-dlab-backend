"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        User.hasOne(models.WorkExperience, {
          foreignKey: 'userId'
        });
        User.hasOne(models.EducationLevel, {
          foreignKey: 'educationLevelId'
        });
        User.hasMany(models.Study, {
          foreignKey: 'userId'
        });
        
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      gender: DataTypes.STRING,
      jobStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
