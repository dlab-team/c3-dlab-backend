require("dotenv").config();
const express = require("express");

const { sequelize } = require("./src/models/index");

const userRoutes = require("./src/routes/userRoutes");

const app = express();

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

app.use("/api", userRoutes);
app.get("/", async (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`App running on port: ${process.env.APP_PORT}`);
});

connectDb();
