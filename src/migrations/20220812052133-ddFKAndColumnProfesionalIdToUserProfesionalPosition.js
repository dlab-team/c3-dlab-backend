"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        "UserProfessionalPositions",
        "ProfessionalPositionId",
        {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: "ProfessionalPositions",
            key: "id",
            //as: "professionalPositionsId",
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
      await queryInterface.removeColumn(
        "UserProfessionalPositions",
        "professionalPositionsId",
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
