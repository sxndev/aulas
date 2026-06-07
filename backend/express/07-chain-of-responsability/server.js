import express from "express";
const app = express()

app.get('/', (req, res) => {
    res.send('Página inicial')
})

// Middleware que verifica se o usuário é administrador
const checkAdmin = (req, res, next) => {
    if(req.user.isAdmin){
        next();
    } else {
        // aqui dá pra falar que dá pra concatenar o metodo status com o send na mesma linha
        res.status(404).send('Você não tem permissão para acessar essa página!!!')
    }
}

// Middleware que verifica se o usuário está autenticado
const checkAuth = (req,res, next) => {
    if(req.isAuthenticated()) {
        next(); // função que passa para o próximo middleware
    } else {
        res.status(401).send('Você precisa estar logado para acessar essa página')
    }
} 
app.get('/admin', checkAuth, checkAdmin, (req, res) => {
    res.send('Bem-vindo à página de administração')
})
app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000')
})
/*
    Chain of Responsability = cadeia de responsabilidade

    é um padrão de projeto

    é um padrão que o Express se baseou para tratar as requisições

    é usado para estabelecer uma sequência de objetos encadeados que são responsáveis por tratar uma requisição

    -- cada objeto na cadeia é responsável por um comportamento específico e, se ele não é capaz de lidar com a requisição, ela é apssada pro próximo objeto na cadeia


*/

