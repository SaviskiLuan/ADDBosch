import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import initRoutes from './src/routes/routes.js'

const app = express()
const port = 8080

app.use(express.json())

initRoutes(app)

app.get('/', (req, res) => {
    res.send('API de pedidos rodando')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})