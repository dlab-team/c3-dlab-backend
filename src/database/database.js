const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  process.env.POSTGRES_DB,
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  }
);

module.exports = sequelize;
