"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserShowTheCodes", [
      {
        status: true,
        notes: "notas",
        UserId: 100,
        ShowTheCodeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserShowTheCodes", null, {});
  },
};
