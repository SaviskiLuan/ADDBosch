const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const port = 8080;

app.use(express.json())
app.use(cors({
    origin: "*"
}))

const connection = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    database: "aula_add",
    port: '3307'
}) 

app.get('/', (req, res) => {
    return res.send("Servidor rodano")
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})