const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/usuarios",      userController.getUsuarios);
router.post("/usuarios",     userController.createUsuario);
router.put("/usuarios/:id",  userController.updateUsuario);
router.delete("/usuarios/:id", userController.deleteUsuario);

// El login ya esta en app.js; no duplicar aqui

module.exports = router;
