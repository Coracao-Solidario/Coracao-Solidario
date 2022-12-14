const controller = require("../controller/donorController");
const express = require("express");
const router = express.Router();

router.get("/all", controller.findAllDonor);

router.get("doador/:id", controller.findDonorById);

router.post("/cadastroDoador", controller.addNewDonor);

router.patch("/doador/:id", controller.updateDonor);

router.delete("/doador/:id", controller.deleteDonor);

module.exports = router;