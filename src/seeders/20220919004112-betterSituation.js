"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("BetterSituations", [
      {
        name: "Quiero trabajo desde mi ciudad actual",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Estoy disponible para migrar de mi ciudad dentro de mi país",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Estoy disponible para migrar a otro país",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("BetterSituations", null, {});
  },
};
