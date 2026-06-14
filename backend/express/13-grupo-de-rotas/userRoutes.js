const express = require('express')
const userRouter = express.Router()

userRouter.get('/', (req, res ) => {
    res.send('caiu na rota raiz de usuários')
})

// como essa rota vai ser de usuário, não preciso escrever ('/usuarios') porque isso eu já vou definir no meu app.js

module.exports = userRouter