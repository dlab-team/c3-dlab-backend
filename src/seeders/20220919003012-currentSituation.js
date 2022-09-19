"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("CurrentSituations", [
      {
        name: "Egresado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Titulado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "En curso",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("CurrentSituations", null, {});
  },
};
