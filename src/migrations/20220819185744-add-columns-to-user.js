"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        "Users",
        "JobId",
        {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: "Jobs",
            key: "id",
          },
        },
        { transaction }
      );
      await queryInterface.addColumn(
        "Users",
        "SoftSkillId",
        {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: "SoftSkills",
            key: "id",
          },
        },
        { transaction }
      );
      await queryInterface.addColumn(
        "Users",
        "VisaId",
        {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: "Visas",
            key: "id",
          },
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn("Users", "JobId", {
        transaction,
      });
      await queryInterface.removeColumn("Users", "SoftSkillId", {
        transaction,
      });
      await queryInterface.removeColumn("Users", "VisaId", {
        transaction,
      });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
