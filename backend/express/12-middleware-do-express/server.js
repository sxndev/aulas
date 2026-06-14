const express = require('express')
const app = express()

app.use(express.json())

// para usar json no meu projeto, devo usar o middlewae do próprio express que lida com JSON, para isso eu usei o app.use(express.json()) que é um middleware do próprio express

app.post('/json', (req, res) => {
    console.log(req.body)
    res.send('json')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})