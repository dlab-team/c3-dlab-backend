require("dotenv").config();
const express = require("express");

const sequelize = require("./src/database/database");
//const Sequelize = require("sequelize");

const app = express();

/* const sequelize = new Sequelize(
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  process.env.POSTGRES_DB,
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  }
); */

async function connectDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection to db has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

app.get("/", async (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`App running on port: ${process.env.APP_PORT}`);
});

connectDb();
