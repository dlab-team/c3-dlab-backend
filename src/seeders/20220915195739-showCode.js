"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ShowTheCodes", [
      {
        date: "2022-12-15 04:33:12",
        company: "Google",
        type: "Fullstack",
        link: "www.google.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ShowTheCodes", null, {});
  },
};
