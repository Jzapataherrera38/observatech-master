const db = require("../config/db");

const Narrativa = {
  getAll: (callback) => db.query("SELECT * FROM narrativas", callback),
  getById: (id, callback) => db.query("SELECT * FROM narrativas WHERE id = ?", [id], callback),
  create: (data, callback) => db.query("INSERT INTO narrativas SET ?", data, callback),
  update: (id, data, callback) => db.query("UPDATE narrativas SET ? WHERE id = ?", [data, id], callback),
  delete: (id, callback) => db.query("DELETE FROM narrativas WHERE id = ?", [id], callback)
};

module.exports = Narrativa;