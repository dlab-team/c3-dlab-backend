'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('WorkExperiences', [{
      urlCv: 'wwww.pruebaurl.com',
      urlLinkedin: 'wwww.pruebalinkedin.com',
      urlGithub: 'wwww.pruebagithub.com',
      urlBriefcase: 'wwww.pruebabriefcase.comm',
      details: 'Hola esta es mi prensetacion',
      yearsExperience: 2,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('WorkExperiences', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
