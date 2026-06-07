import express from "express";
const app = express()

app.use((req, res, next) => {
    console.log(`Requisição recebida em ${new Date()}`)
    next(); // função que passa para o próximo middleware
})

// toda vez que o usuário fazer uma requisição ou acessar uma nova rota, o middleware acima vai ser executado primeiro e depois ele vai passar para a próxima função, que pode ser outro middleware ou a rota em si

// para usar um middleware no express, usa a função use() e recebe os 3 parametros 
// (req, res, next) e dentro do middleware tem que chamar a função next() para passar para o próximo middleware ou rota

  
app.get('/', (req,res) => {
    res.send('Página inicial')  
})

app.get('/usuarios', (req,res) => {
    res.send('caiu na rota de usuários')  
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
/* 
        Middlewares são funções que são executadas entre a requisição do cliente e a resposta do servidor 

        permite que seka feita uma série de operações em uma solicitação como :

        autenticação
        validação de dados
        manipulação de erros
        entre outras

        Os Middlewares podem ser executados em ordem, e cada middleware tem acesso a 3 objetos principais:

        o objeto Request (ou req), que contém informações sobre a requisição do cliente
        o objeto Response (ou res), que permite enviar uma resposta para o cliente
        e a função next(), que permite passar a requisição para o próximo middleware
*/

