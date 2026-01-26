import axios from 'axios'

export async function fetchUserDetails(element, username) {
    try {
        // const response = await fetch(`https://api.github.com/users/${username}`)

        const response = await axios.get(`https://api.github.com/users/${username}`)

        
        const user = response.data
        // if(!response.ok){
        //     throw new Error(`GitHub API returned status code ${response.status}`);
        // }

        // const user = await response.json()

        element.innerHTML = `
            <img src=" ${user.avatar_url}" alt="${user.name} "/>
            <h1> ${user.name ? user.name : "No name"} </h1>
            <p> ${user.bio ? user.bio : "No bio" } </p>`
         
    } catch (error) {
        console.log(`Error fetching Github user: ${error.message}`)
        element.innerHTML = `<p>Error loading user data</p>`
    }
}  
        /* quando trabalhamos com o axios ele retorna um objeto e dentro desse objeto existe a propriedade data que contem os dados da resposta da requisição, ele retorna os seguintes dados:

        config, data, headers, request, status, statusText
        */

        /* No código acima, a função fetchUserDetails faz uma requisição para a API do GitHub usando axios para obter os detalhes de um usuário específico. Se a requisição for bem-sucedida, os detalhes do usuário (avatar, nome e bio) são exibidos no elemento HTML fornecido. Se houver um erro durante a requisição, uma mensagem de erro é exibida no console e uma mensagem de erro é mostrada no elemento HTML. 
        
        o axios simplifica o processo de fazer requisições HTTP e lida automaticamente com a conversão de JSON, tornando o código mais limpo e fácil de entender.
        */