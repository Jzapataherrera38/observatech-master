const Narrativa = require("../models/narrativaModel");

const db = require("../config/db");

const getNarrativas = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM narrativas");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener narrativas" });
  }
};

const createNarrativa = async (req, res) => {
  const { titulo, contenido, autor } = req.body;
  try {
    await db.query(
      "INSERT INTO narrativas (titulo, contenido, autor) VALUES (?, ?, ?)",
      [titulo, contenido, autor]
    );
    res.json({ message: "Narrativa creada con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error al crear narrativa" });
  }
};

const updateNarrativa = async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido, autor } = req.body;
  try {
    await db.query(
      "UPDATE narrativas SET titulo=?, contenido=?, autor=? WHERE id=?",
      [titulo, contenido, autor, id]
    );
    res.json({ message: "Narrativa actualizada con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar narrativa" });
  }
};

const deleteNarrativa = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM narrativas WHERE id=?", [id]);
    res.json({ message: "Narrativa eliminada con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar narrativa" });
  }
};

module.exports = {
  getNarrativas,
  createNarrativa,
  updateNarrativa,
  deleteNarrativa,
};
