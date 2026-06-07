import express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.send('Home page');
}); // envio uma resposta para o cliente e parar a conexão entre cliente e servidor, se eu não mandar nenhuma resposta para o cliente 

const users = [ 
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

app.get('/users/:id', (req,res) => {
    const id = req.params.id
    const user = users.find(u => u.id == id);

    if (!user){
        return res.status(404).send('Usuário não encontrado');
        // res.status(): define o código de status HTTP da resposta. O método res.status pode ser encadeado com outros métodos de resposta (como res.send() ou res.json()) para enviar uma resposta com código de status apropriado
    }

    res.status(200) 
    
    return res.send(`o usuário ${user.name} possui o id: ${user.id}`); 
    // res.send() envia uma resposta HTTP com um copo. O método detecta automaticamente o tipo de conteúdo com base no argumento que você passa e define os cabeçalhos apropriados. Por exemplo, você pode enviar uma string, objeto JSON ou um buffer usando res.send()

})

app.get('/about', (req, res) => {
    return res.send('seção sobre nós')
})

app.get('/new-page', (req, res) => {
    return res.redirect('/about')
})

app.get('/download', (req, res) => {
    res.download('./porshe.jfif')

    // o método de resposta 'download' do Express.js é utilizado para enviar um arquivo para o cliente (navegador ou outra aplicação cliente) como uma resposta a uma requisiçãoo HTTP. O objetivo é permitir que o usuário baixe o arquivo em seu computador ou dispositivo
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
});



// res.json() envia uma resposta JSON para o cliente, convertendo automaticamente um objeto JavaScript em uma string JSON.

// res.redirect(): envia uma resposta HTTP que redireciona o cliente para outra página, eu posso especificar a URL de destino como um argumento para res.redirect()

// res.status(): define o código de status HTTP da resposta. O método res.status pode ser encadeado com outros métodos de resposta (como res.send() ou res.json()) para enviar uma resposta com código de status apropriado