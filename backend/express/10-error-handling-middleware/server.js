import express from 'express';
const app = express();

app.get('/', (req, res) => {  
    // res.send('Página inicial')
    throw new Error()
})

app.use((error, req, res ,next) => {
    res.status(500).send('Ocorreu um erro no servidor')
})


app.listen(3000, () => {
    console.log('http://localhost:3000')
})

// para fazer um error handling middleware, ele sempre deve ser criado depois que todas as rotas foram criadas no nosso servidor

// Error handling middleware - Middleware de manipulação de erro

// usado para lidar com error que podem ocorrer durante a execução do seu site ou sistema.

// Ao invés de responder diretaente ao cliente, o middleware de tratamento de erro captura o erro e envia uma resposta amigável pro cliente