const express = require("express");
const connection = require("./db");
const app = express();

app.get("/", (req, res) => {
    connection.query("SELECT * FROM usuarios", (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Erro no banco");
      }
  
      res.json(results);
    });
  });

app.post("/registro", (req, res) => {
    const { nome, email } = req.body
    connection.query("INSERT INTO usuario (nome, email) VALUES (?, ?)",
    [nome, email]
    )
    return res.status(201).send({response: "Usuário registrado com sucesso" })
})

app.listen(3307, () => {
  console.log("Servidor rodando na porta 3000");
});