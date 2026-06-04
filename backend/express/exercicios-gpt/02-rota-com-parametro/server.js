import express from "express";

const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('funcionando')
})

app.get('/usuario/:nome', (req, res) => {
    const nome = req.params.nome
    res.json(
        {
            mensagem: `Olá ${nome}`
        }
    )

})


app.get('/produto/:id', (req, res) => {
    const idReqParam = req.params.id
    res.json(
        {
            id: idReqParam
        }
    )

})


app.listen(port, () => {
    console.log(`http://localhost:${port}`)    
})