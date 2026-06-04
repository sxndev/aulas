import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/users', (req, res) => {
    res.send('users route')
})
app.get('/products', (req, res) => {
    res.send('products route')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})

/*
    para definir uma rota no express eu utilizo o método que o usuário acessa (get, post, put, delete), como parametro eu passo o caminho da rota (ex: /users, /products), e como segundo parametro eu passo  handler, que é a função que vai ser executada quando o usuário acessar aquela rota
*/