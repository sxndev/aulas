// application level middleware e error-handling middleware são duas formas de middleware que podem ser usadas para melhorar a funcionalidade e flexibilidade de ma aplicação.

// application level middleware - Middleware a nível de aplicação 

// responsável por interceptar e processar as solicitações de uma aplicação antes que elas sejam roteadas para um controlador específico.

// autenticação, validação de entrada, cache e manipulação de erros, e pode ser usado para aplicar regras de negócios comuns a todas as rotas da aplicação.

import express from 'express';
const app = express();

app.use((req, res, next) => {
    const isLogged = true;

    if(isLogged){
        next()
    } else {
        res.status(401).send('Você precisa estar logado para acessar esse site')
    }

})


app.get('/', (req, res) => {  
    res.send('Olá mundo');
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})