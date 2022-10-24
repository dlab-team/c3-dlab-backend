"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserTests", [
      {
        status: true,
        score: 90,
        UserId: 1,
        TestId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: true,
        score: 85,
        UserId: 1,
        TestId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: true,
        score: 80,
        UserId: 1,
        TestId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: false,
        UserId: 1,
        TestId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserTests", null, {});
  },
};
