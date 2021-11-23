const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./api/routes.js')
const port = process.env.PORT || 3000

app.use(cors())
app.use('/api', routes)

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
})