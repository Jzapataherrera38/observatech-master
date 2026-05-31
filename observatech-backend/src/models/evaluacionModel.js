const db = require("../config/db");

const Evaluacion = {
  getAll: (callback) => db.query("SELECT * FROM evaluaciones", callback),
  getById: (id, callback) => db.query("SELECT * FROM evaluaciones WHERE id = ?", [id], callback),
  create: (data, callback) => db.query("INSERT INTO evaluaciones SET ?", data, callback),
  update: (id, data, callback) => db.query("UPDATE evaluaciones SET ? WHERE id = ?", [data, id], callback),
  delete: (id, callback) => db.query("DELETE FROM evaluaciones WHERE id = ?", [id], callback)
};

module.exports = Evaluacion;