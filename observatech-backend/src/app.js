const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const evaluacionRoutes = require("./routes/evaluacionRoutes");
const narrativaRoutes = require("./routes/narrativaRoutes"); 

const app = express();
app.use(cors());
app.use(express.json());

// Login centralizado aqui
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );
    if (rows.length === 0)
      return res.status(404).json({ message: "Usuario no encontrado" });
    const usuario = rows[0];
    if (password !== usuario.password)
      return res.status(401).json({ message: "Contrasena incorrecta" });
    res.json({ message: "Login exitoso", usuario });
  } catch (err) {
    console.error("Error en login:", err);
    res.status(500).json({ message: "Error en el login" });
  }
});

// ✅ CRUD de usuarios y evaluaciones
app.use("/api", userRoutes);
app.use("/api", evaluacionRoutes);
app.use("/api", narrativaRoutes);

module.exports = app;
 