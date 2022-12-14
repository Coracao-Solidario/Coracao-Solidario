const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const donorRoutes = require("./routes/donorRoute");
const patientRoute = require("./routes/patientRoute");

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/coracaosolidario/doadores",donorRoutes);
app.use("/coracaosolidario/pacientes",patientRoute);


app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
module.exports = app;
