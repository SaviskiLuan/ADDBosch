import express from 'express'
import mysql from 'mysql2';
import dotenv from 'dotenv';
import initRoutes from './src/routes/routes.js';

const app = express();
const PORT = 8000

dotenv.config();

app.use(express.json());

initRoutes(app);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})


app.get('/', (req, res) => {
    res.send("API inicializada")
})
