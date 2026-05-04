const express = require('express')
const initRoutes = require('./src/routes/routes')

const app = express()
const port = 8080

app.use(express.json())

initRoutes(app)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.get('/', (req, res) => {
    console.log("A API está rodando")
    return res.send("API funcionando!" )
})