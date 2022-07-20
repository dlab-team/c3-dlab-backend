require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const { sequelize } = require("./src/models/index");

const userRoutes = require("./src/routes/userRoutes");

const app = express();

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

app.listen(process.env.APP_PORT, () => {
  console.log(`App running on port: ${process.env.APP_PORT}`);
});

connectDb();
