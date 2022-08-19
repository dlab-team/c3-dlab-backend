"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Visas", [
      {
        name: "Estados Unidos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Unión Europea",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mi país de residencia actual",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Otros países",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Visas", null, {});
  },
};
