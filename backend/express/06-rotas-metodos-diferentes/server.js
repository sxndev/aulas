import express from "express"
const app = express()

app.get('/', (req, res) => {
    res.send('Página inicial')
})

app.get('/usuarios/:name', (req, res) => {
    const name = req.params.name;
    res.send(`este perfil é do usuário ${name}`)
})
app.put('/usuarios/:name', (req, res) => {
    const name = req.params.name;
    res.send(`este perfil é do usuário ${name} usando o método PUT`)
})


app.listen(3000, () => {
    console.log('servidor em execução: http://localhost:3000/')
})