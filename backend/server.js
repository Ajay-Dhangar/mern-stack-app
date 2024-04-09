const express = require("express");
const { ErrorHandler } = require("./src/middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./src/config/db");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./src/routes/GoalRoutes"));

app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
