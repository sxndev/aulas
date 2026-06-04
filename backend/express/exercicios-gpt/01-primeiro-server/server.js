import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send('Servidor funcionando!')
})

app.get('/sobre', (req, res) => {
    res.send('Minha primeira API Express')
})

const port = 3000

app.listen(port, () => {
    console.log('http://localhost:3000')    
})