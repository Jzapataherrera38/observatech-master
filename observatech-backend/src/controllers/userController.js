const User = require("../models/userModel");
const db = require("../config/db");

const getUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

const createUsuario = async (req, res) => {
  const { nombre, email, password, rol } = req.body;
  try {
    await db.query(
      "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
      [nombre, email, password, rol]
    );
    res.json({ message: "Usuario creado con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error al crear usuario" });
  }
};

const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, password, rol } = req.body;
  try {
    await db.query(
      "UPDATE usuarios SET nombre=?, email=?, password=?, rol=? WHERE id=?",
      [nombre, email, password, rol, id]
    );
    res.json({ message: "Usuario actualizado con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM usuarios WHERE id=?", [id]);
    res.json({ message: "Usuario eliminado con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar usuario" });
  }
};

module.exports = {
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
