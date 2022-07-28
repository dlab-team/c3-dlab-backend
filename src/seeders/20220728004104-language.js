"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Languages", [
      {
        name: "Python",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "JavaScript",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HTML/CSS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Java",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "PHP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ruby",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Scala, Perl y/o Go",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "C/C++",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kotlin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Swift",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "C#",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TypeScript",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Assembly",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "R",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Go",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bash/Shell",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Languages", null, {});
  },
};
