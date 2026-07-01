const express = require('express')
const app = express()
const userRouter = express.Router()


// usando callback simples
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//usando uma função nomeada
const mostrarOlaMundo = (req,res) => {
    res.send('Olá mundo com função nomeada!')
}

app.get('/', mostrarOlaMundo)

// criando um handler na própria rota e usar next para passar o controle para o próximo route handler
// primeiro ele execulta a primeia função (mostra a mensagem no console), chama o next() para passar para o próximo handler e por último executa o .send

app.get('/', (req, res, next) => {
    console.log('Olá mundo')
    next()
}, (req, res) => {
    res.send('Este é o segundo route handler')
})

// chamando uma função como argumento da rota:

function logRequest(req, res, next) {
    console.log('Nova requisição recebida')
    next()
}

app.get('/', logRequest, (req, res) => {
    res.send('Olá, mundo!')
})

// definindo um array de funções

const cb0 = (req, res, next) => {
    console.log('cb0')
    next()
}
const cb1 = (req, res, next) => {
    console.log('cb1')
    next()
}
const cb2 = (req, res, next) => {
    res.send('cb2')
}

app.get('/', [cb0, cb1, cb2])

// combinação de funções e array de funções

app.get('/', [cb0,cb1], (req, res, next) => {
    console.log('a resposta vai ser enviada para a próxima função...')
    next()
}, (req, res) => {
    res.send('Ultima parada')
})

// aqui eu estou criando uma rota com 2 metodos:
const router = userRouter.get('/', function (req,res) {
    res.send('lista de livros')
}).post('/', function (req, res){
    res.send('novo livro adicionado')
})

/*
    route handlers ou manipuladores de rota

    são funções que funcionam como middlewares e são executadas quando uma determinada rota é acessada.

    eles são responsáveis por lidar com a solicitação do cliente e enviar uma resposta de volta.

    cada rota no express pode ter vários handlers, que são executados em uma ordem específica
*/