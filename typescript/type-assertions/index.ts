/* o conceito de type assertions é basicamente a gente dizer pro TypeScript qual o tipo que é esperado pra um valor.

Algumas vezes o TypeScript não sabe qual tipo esperar, então podemos informar isso.
*/

// para informar o tipo de um elemento que nós esperamos, nós usamos a palavra chave "as"

// nesse exemplo ele espera um elemento de botão:
const button = document.getElementById('button') as HTMLButtonElement ; 

button.addEventListener('click', event => {
    const mouseEvent = event as MouseEvent; // aqui eu estou garantindo que o event é do tipo MouseEvent
})

const image = document.getElementById('img') ;