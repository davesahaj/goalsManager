const express = require("express");
const dotenv = require("dotenv").config({ path: "api/config/config.env" });
const colors = require("colors");
const app = require("./app");
const connectDB = require("./config/database");

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server has been started on ${process.env.PORT}`);
});
