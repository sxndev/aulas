const express = require('express')
const postRouter = express.Router()

postRouter.get('/', (req, res ) => {
    res.send('caiu na rota raiz de posts')
})


module.exports = postRouter