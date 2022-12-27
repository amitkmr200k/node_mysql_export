const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

const apiRoutes = require("./src/routes/index");

dotenv.config();

app.use(cors());
app.use(helmet());

app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (request, response, next) => {
  response.send("Welcome to node-mysql-export API");
});

app.use((req, res, next) => {
  const error = new Error("API Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`node-mysql-export backend is listening on port ${process.env.SERVER_PORT}!`);
});
