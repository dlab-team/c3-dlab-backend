"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ShowTheCodes", [
      {
        date: "2022-12-15 04:33:12",
        company: "Google",
        web: "https://www.google.com",
        type: "Fullstack",
        requirements: "javascript, gcp, go",
        link: "http://desafiolatam/zoom.us/j/123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ShowTheCodes", null, {});
  },
};
