"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ShowTheCodes", [
      {
        date: "2022-10-04 18:00:00",
        company: "Entel",
        web: "https://www.getonbrd.com",
        type: "Full-stack Junior (React-Node.js)",
        requirements: "JavaScripts, React, SQL,GIT, Docker",
        link: "http://desafiolatam/zoom.us/j/123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "2022-10-03 15:00:00",
        company: "Mercado Libre",
        web: "https://www.getonbrd.com",
        type: "Developer Front-end",
        requirements: "React, UX/UI, Jest, API REST Y Docker",
        link: "http://desafiolatam/zoom.us/j/123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "2022-10-01 19:00:00",
        company: "Claro",
        web: "https://www.getonbrd.com",
        type: "Junior Front-end Developer",
        requirements: "Diseño Responsivo, HTML, CSS, JavaScript y JSON",
        link: "http://desafiolatam/zoom.us/j/123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "2022-10-01 13:00:00",
        company: "Movistar",
        web: "https://www.getonbrd.com",
        type: "Desarrollador Junior de Python",
        requirements: "Django, AWS, GIT, HTML, JavaScript y CSS",
        link: "http://desafiolatam/zoom.us/j/123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "2022-10-02 15:00:00",
        company: "Lenovo",
        web: "https://www.getonbrd.com",
        type: "Desarrollador(a) de Software",
        requirements: "Django, AWS, GIT, HTML, JavaScript y CSS",
        link: "http://desafiolatam/zoom.us/j/123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "2022-09-25 15:00:00",
        company: "Hp",
        web: "https://www.getonbrd.com",
        type: "Associate Engineer",
        requirements: "React, Vue.js, .NET Core, Java, Scala",
        link: "http://desafiolatam/zoom.us/j/123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "2022-09-23 17:00:00",
        company: "Google",
        web: "https://www.getonbrd.com",
        type: "Desarrollador Full Stack Python",
        requirements: "Python, JavaScripts y react.js",
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
