const express = require('express')
const app = express()

app.use(express.static('./public'))
// carregou o index.html automaticamente na pasta public porque eu coloquei o nome como "index" e o express já identificou a nomeclatura do arquivo e carregou ele pra mim


app.use('/assets',express.static('./files')) 
// consegui acessar a pasta files e ver a foto do playstation 5 
app.listen(3000, () => {
    console.log('http://localhost:3000')
})
 
/*
    para usar arquivos estaticos no express, usamos o middleware express.static

    express.static(root, [options])

    só devo usar o express.static() para arquivos que não são dinamicos, somente estáticos
*/