'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkExperiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      urlCv: {
        type: Sequelize.STRING
      },
      urlLinkedin: {
        type: Sequelize.STRING
      },
      urlGithub: {
        type: Sequelize.STRING
      },
      urlPortfolio: {
        type: Sequelize.STRING
      },
      details: {
        type: Sequelize.TEXT
      },
      yearsExperience: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('WorkExperiences');
  }
};