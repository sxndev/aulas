import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/users/:name', (req, res) => {
    const name = req.params.name //acessando o parâmetro que eu recebi da requisição
    res.send(`o nome do usuário é ${name}`)
})

/*
    req params é a parâmetro que eu posso usar na url da requisição, para usar um parâmetro eu devo usar : antes do nome do parâmetro que eu quero acessar

    um parâmetro vai ser usado quando eu precisar pegar uma informação da url e usá-la dentro do node, podendo usar ela para diversas coisas, como uma busca no banco de dados por exemplo

    um exemplo de requisição com parâmetro é o instagram que possui uma rota para cada perfil acessado, ao invés de cada rota ser feita manualmente, a gente usa o query param (parâmetro de busca)

*/