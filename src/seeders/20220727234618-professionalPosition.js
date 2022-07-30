"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ProfessionalPositions", [
      {
        name: "Desarrollador/a Full Stack",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Desarrollador Back End",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Desarrollador/a Front End",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diseñador/a UX / UX Research o UI",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Desarrollador/a Móvil",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Data Scientist o especialista machine learning",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ingeniería de Datos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ProfessionalPositions", null, {});
  },
};
