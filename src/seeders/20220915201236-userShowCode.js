"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserShowTheCodes", [
      {
        status: false,
        notes: "notas",
        UserId: 1,
        ShowTheCodeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: true,
        notes: "notas",
        UserId: 1,
        ShowTheCodeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: true,
        notes: "notas",
        UserId: 1,
        ShowTheCodeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: true,
        notes: "notas",
        UserId: 1,
        ShowTheCodeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: false,
        notes: "notas",
        UserId: 1,
        ShowTheCodeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: false,
        notes: "notas",
        UserId: 1,
        ShowTheCodeId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: true,
        notes: "notas",
        UserId: 1,
        ShowTheCodeId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserShowTheCodes", null, {});
  },
};
