const express = require("express");
const morgan = require("morgan");

/* Import middlewares */
const responseFormat = require("./src/middlewares/response-format.middleware");
const notFoundHandler = require("./src/middlewares/not-found.middleware");
const errorHandler = require("./src/middlewares/error-handler.middleware");

/* Route import */
const API_ROUTES = require("./src/routes");

/* Define express app */
const app = express();

/* Using middlewares */
app.use(responseFormat);
app.use(express.json());
app.use(morgan("dev"));

/* Define routes */
app.use("/api", API_ROUTES);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome!</h1>`);
});

/* Error handler middleware */
app.use(errorHandler);
app.use(notFoundHandler);

module.exports = app;
