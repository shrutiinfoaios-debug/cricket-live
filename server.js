// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");
const constants = require('./utils/constants.js');
//const requestLogger = require("./middlewares/requestLogger");

const app = express();
const port = process.env.PORT || constants.PORT;

const userroutes = require('./routes/user.routes.js');
const operatorroutes = require('./routes/operators.routes.js');
const apikeyroutes = require('./routes/apikeys.routes.js');
const planroutes = require('./routes/plans.routes.js');
// CORS
app.use(cors());

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Swagger docs
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Log every request
//app.use(requestLogger);

// Routes
app.use('/', userroutes);
app.use('/', operatorroutes);
app.use('/', apikeyroutes);
app.use('/', planroutes);

// 404 handler
app.use((req, res) => {
  res.status(constants.HTTP_400).send({ url: req.originalUrl + ' not found' });
});

// Start server
app.listen(port);
console.log('RESTful API server started on: ' + port);
