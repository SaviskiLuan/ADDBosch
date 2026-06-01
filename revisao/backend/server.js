import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import initRoutes from './src/routes/routes.js';

const app = express();
const PORT = 3000;

dotenv.config();



app.use(express.json());
initRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("API está rodando!");
})