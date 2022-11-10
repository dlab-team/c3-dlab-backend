"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        "ShowTheCodes",
        "web",
        {
          type: Sequelize.DataTypes.STRING,
          onDelete: "CASCADE",
        },
        { transaction }
      );
      await queryInterface.addColumn(
        "ShowTheCodes",
        "requirements",
        {
          type: Sequelize.DataTypes.STRING,
          onDelete: "CASCADE",
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
      await queryInterface.removeColumn("ShowTheCodes", "web", {
        transaction,
      });
      await queryInterface.removeColumn("ShowTheCodes", "requirements", {
        transaction,
      });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
