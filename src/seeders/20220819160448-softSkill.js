"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("SoftSkills", [
      {
        name: "Líder",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Resiliente/Perseverante",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Comunicación/Sociable",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Colaborativo/Empatía",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aprendizaje ágil/Autónomo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Flexible/Adaptable",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Responsable",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Innovador/Curioso",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Negociación",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Resolución de problemas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Productividad/Iniciativa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("softSkills", null, {});
  },
};
