"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("EducationLevels", [
      {
        name: "Universidad completa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Universidad incompleta o en curso",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Instituto profesional o CFT completa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Instituto profesional o CFT en curso",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Educación media completa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Escolar completa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Escolar incompleta",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Postgrago completo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Postgrado incompleto",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("EducationLevels", null, {});
  },
};
