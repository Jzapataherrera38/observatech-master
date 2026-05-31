const express = require("express");
const router = express.Router();
const evaluacionController = require("../controllers/evaluacionController");


router.get("/evaluaciones", evaluacionController.getEvaluaciones);
router.post("/evaluaciones", evaluacionController.createEvaluacion);
router.put("/evaluaciones/:id", evaluacionController.updateEvaluacion);
router.delete("/evaluaciones/:id", evaluacionController.deleteEvaluacion);

module.exports = router;
