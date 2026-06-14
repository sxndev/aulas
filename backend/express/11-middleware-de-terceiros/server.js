const express = require('express')
const app = express()
var cookieParser = require('cookie-parser')

app.use(cookieParser())
// nesse código eu usei um middleware de terceiros para criar cookies no meu site, para usá-lo, eu instalei ele com o npm, importei no meu projeto e usei o app.use(cookieParser()) para conseguir utilizar esse middleware no meu sistema

app.get('/', (req, res) => {    
    res.send('Página inicial')
})

app.post('/cookies', (req, res)=> {
    res.cookie('nome','Nicolas')
    .send('cookies definidos com sucesso')
})

app.get('/cookies', (req, res)=> {
    console.log(req.cookies)
    res.send('mostrando os cookies')
})


app.listen(3000, () => {    
    console.log('http://localhost:3000')   
})
