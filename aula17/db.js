const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: undefined,
    database: "addbosch",
    port: 3307,
})

connection.connect((err) => {
    if (err) {
      console.error("Erro ao conectar:", err);
      return;
    }
    console.log("Conectado ao banco de dados!");
  });

  module.exports = connection;