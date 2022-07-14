const fs = require("fs");

module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "postgres",
    host: "pg",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.PROD_USERNAME,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_DBNAME,
    host: process.env.PROD_HOSTNAME,
    port: process.env.PROD_PORT,
    dialect: "postgres",
  },
};
