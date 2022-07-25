const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const { sequelize } = require("./src/models/index");

const userRoutes = require("./src/routes/userRoutes");

const app = express();

if (process.env.NODE_ENV === 'development') {
  // we use notenv only for local dev purposes, on heroku we use heroku env variables
  require('dotenv').config()
}

const express = require('express')

app.use(cors());

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "dlab-c3 API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./src/routes/*.js")}`],
};

async function connectDb() {
  try {
    await sequelize.authenticate();
    //await sequelize.sync({ force: true });
    console.log("Connection to db has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

app.use(express.json());

app.use(
  cookieSession({
    signed: false,
  })
);

app.use("/api/1", userRoutes);
app.use(
  "/api/1/documentation",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJSDoc(swaggerSpec))
);

const port = process.env.APP_PORT || process.env.PORT
app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})

connectDb();

