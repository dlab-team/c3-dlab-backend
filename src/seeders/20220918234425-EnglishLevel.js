"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("EnglishLevels", [
      {
        name: "Sin conocimientos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "A1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "A2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "B1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "B2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "C1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "C2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserEnglishLevels", null, {});
  },
};
