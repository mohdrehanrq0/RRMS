const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error/errorMiddleware");
const router = require("./routes/routes");

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorMiddleware);

//initialize routes
app.use("/api/v1", router);

module.exports = app;
