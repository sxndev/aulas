
// ESTRUTURA PARA ALTERAR ESTILOS:

// elemento.style.regraCss = valor da regra 

// posso alterar todas as propriedades CSS utilizando o objeto .style

// a partir da propriedade .style eu posso alterar qualquer estilo do elemento html, mas para fazer isso eu devo usar o camewcase, e não igual se faz no css comum.

function alteraCorDeFundoPrimeiroPost(){
    let posts = document.getElementsByClassName('post'); // peguei os posts pela classe
    
    console.log(posts)
    
    let primeiroPost = posts[0] // peguei só o primeiro post (peguei pela váriavel acima e usei o índice dele que é 0)

    console.log('primiro post:', primeiroPost)

    primeiroPost.style.backgroundColor = 'red' // posso colocar a cor como string, hexadecimal, hsl e outras propriedades de cor

} 

 function aumentarFonteSegundoPost(){
    let textoPosts = document.getElementsByClassName('texto-post')

    textoPosts[1].classList.add('fonte-grande') // adicionei uma classe no HTML através do JavaScript

    console.log(textoPosts[1].classList)
} 
// classList me dá acesso a todas as classes do elemento

//add() é uma propriedade do objeto classList que permite adicioonar outras classes nos elementos definindo elas como string dentro dos parênteses

//                  ALTERANDO ATRIBUTOS

function marcarRadio(genero){
    let radioFeminino = document.getElementById('genero-feminino')
    let radioMasculino = document.getElementById('genero-masculino')

    if(genero === 'M'){ 
        radioMasculino.checked = true // acessei o atributo "checked" 
    } else if(genero === 'F'){ 
        radioFeminino.checked = true 
    }
}