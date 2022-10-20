'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserBetterSituations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BetterSituationId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "BetterSituations",
          key: "id",
        },
      },
      UserId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserBetterSituations');
  }
};