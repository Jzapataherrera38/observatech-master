const express = require("express");
const router = express.Router();
const narrativaController = require("../controllers/narrativaController");


router.get("/narrativas", narrativaController.getNarrativas);
router.post("/narrativas", narrativaController.createNarrativa);
router.put("/narrativas/:id", narrativaController.updateNarrativa);
router.delete("/narrativas/:id", narrativaController.deleteNarrativa);

module.exports = router;
