"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Frameworks", [
      {
        name: "Oracle",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cassandra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SQLite",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Redis",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MongoDB",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "PostgreSQL",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MySQL",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Firebase Realtime Database",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MariaDB",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Microsoft SQL Server",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "JQuery",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "React",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spring",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Angular",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vue.js",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Laravel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Django",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ruby On Rails",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ASP.NET o ASP.NETCore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Flask",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Express.js",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "FastAPI",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: ".NET",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Node.js",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Frameworks", null, {});
  },
};
