import express from 'express'
import asyncHandler from 'express-async-handler'
const app = express()

// tratando erro com try/catch dentro da rota
app.get('/users/:id', (req, res) => {
    
    const id = req.params.id
    const user = getUserById(id)
    res.json(user)

    // try {
    //     const user = getUserById(id);
    //     res.json(user)
    // } catch (error) {
    //     console.log(error)
    //     res.status(500).json({mensage: 'Erro ao obter usuário'})
    // }
    
})

// usando com error handling middleware, utilizando esse error handling middleware, eu posso remover o try/catch das rotaas, pois se algum erro acontecer, ele vai cair direto aqui. 

// se tivesse outras rotas diferentes, não precisaria usar tratamento de erro direto nas rotas  
app.use((err, req, res, next) => {
    res.status(500).json({mensage: 'Ocorreu um erro inesperado'})
})

// rota com o pacote express-async-handler para tratar requisições assíncronas
app.get('/user/:id', asyncHandler(async (req,res) => {
    const id = req.params.id
    const user = await getUserById(id)
}))

// vamos ver 3 tipos de tratamentos de erros:

// tratamento de erro no middleware de rota
// tratamento de erro no middleware de erro global
// tratamento de erro com o pacote 'express-async-errors'
app.listen(3000, () => {
    console.log('http://localhost:3000')
})