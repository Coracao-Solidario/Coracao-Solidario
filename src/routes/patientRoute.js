const controller = require("../controller/patientController");
const express = require("express");
const router = express.Router();

router.get("/all", controller.findAllPatient);

router.get("/:id", controller.findPatientById);

router.get("/name/:name", controller.findPatientByName);

router.post("/cadastroPaciente", controller.addNewPatient);

router.patch("/:id", controller.updatePatient);

router.delete("/:id", controller.deletePatient);

module.exports = router;