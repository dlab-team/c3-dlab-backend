"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Jobs", [
      {
        name: "Full Time",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Part Time",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Freelancer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Jobs", null, {});
  },
};
