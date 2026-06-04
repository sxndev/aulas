import express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.send('Home page');
})

const users = [ 
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

app.get('/users/:id', (req,res) => {
    const id = req.params.id
    const user = users.find(u => u.id == id);

    if (!user){
        return res.status(404)
        .send('User not found');
    }

    res.send(`o usuário ${user.name} possui o id: ${user.id}`);

})

app.listen(3000, () => {
    console.log('http://localhost:3000')
});

// res.json() envia uma resposta JSON para o cliente, convertendo automaticamente um objeto JavaScript em uma string JSON.