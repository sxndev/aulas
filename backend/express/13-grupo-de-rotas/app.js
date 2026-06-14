const express = require('express')
const app = express()
const userRouter = require('./userRoutes')
const postRouter = require('./postRoutes')

app.use('/users', userRouter) 
app.use('/posts', postRouter)
// aqui eu defini qual rota o usuário precisará acessar para cair na rota de usuários
// sempre que ele usar a rota /users, o segundo parâmetro vai ter o agrupamento de rotas e verificará se tem alguma rota correspondente


app.get('/', (req, res) => {
    res.send('página inicial')
})


app.listen(3000, () =>{
    console.log('funcionando na porta http://localhost:3000')
})