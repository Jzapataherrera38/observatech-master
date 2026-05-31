const mysql = require("mysql2/promise");

//createPool soporta varias conexiones simultaneas
// y devuelve Promises (requerido por async/await)
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "2002",   // cambia si usaste otra contraseña
  database: "observatech",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = db;