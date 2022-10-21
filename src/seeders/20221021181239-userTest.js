"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserTests", [
      {
        status: true,
        score: 90,
        UserId: 100,
        TestId: 1,
      },
      {
        status: true,
        score: 85,
        UserId: 100,
        TestId: 2,
      },
      {
        status: true,
        score: 80,
        UserId: 100,
        TestId: 3,
      },
      {
        status: false,
        UserId: 100,
        TestId: 10,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserTests", null, {});
  },
};
