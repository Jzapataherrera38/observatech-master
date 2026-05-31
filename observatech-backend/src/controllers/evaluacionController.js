const Evaluacion = require("../models/evaluacionModel");
const db = require("../config/db");

const getEvaluaciones = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM evaluaciones");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener evaluaciones" });
  }
};

const createEvaluacion = async (req, res) => {
  const { titulo, tipo, descripcion } = req.body;
  try {
    await db.query(
      "INSERT INTO evaluaciones (titulo, tipo, descripcion) VALUES (?, ?, ?)",
      [titulo, tipo, descripcion]
    );
    res.json({ message: "Evaluación creada con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error al crear evaluación" });
  }
};

const updateEvaluacion = async (req, res) => {
  const { id } = req.params;
  const { titulo, tipo, descripcion } = req.body;
  try {
    await db.query(
      "UPDATE evaluaciones SET titulo=?, tipo=?, descripcion=? WHERE id=?",
      [titulo, tipo, descripcion, id]
    );
    res.json({ message: "Evaluación actualizada con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar evaluación" });
  }
};

const deleteEvaluacion = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM evaluaciones WHERE id=?", [id]);
    res.json({ message: "Evaluación eliminada con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar evaluación" });
  }
};

module.exports = {
  getEvaluaciones,
  createEvaluacion,
  updateEvaluacion,
  deleteEvaluacion,
};

