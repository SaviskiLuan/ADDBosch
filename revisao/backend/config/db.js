import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco:', err);
    return;
  }

  console.log('Conectado ao MySQL!');
});

export default connection;