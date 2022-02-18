const express = require("express");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
const goalsRoute = require("./routes/goalsRoute");

app.use("/api/", goalsRoute);

module.exports = app;
