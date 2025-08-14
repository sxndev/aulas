function adicionarComentario(){
    let inputComentario = document.getElementsByName('novo-comentario') // pega o elemento pelo nome
    
    let textoDigitado = inputComentario[0].value; // pega o valor do primeiro input

    let novosComentarios = document.getElementById('novos-comentarios') // selecionou a div onde terá os comentários

    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>` // usa a div onde terá os comentários, pega a váriavel "textoDigitado" e coloca ela dentro da div
}  

// o .innerHTMl define ou retorna o conteúdo HTML (HTML interno) de um elemento, no exemplo acima, ela pegou a váriavel "textoDigitado" e colocou dentro da div novos-comentarios 


// Adicionando o comentário através do método .innerHTML, que insere porções de HTML dentro de determinado elemento. Nesse caso, o que queremos adicionar é um parágrafo contendo o comentário que foi escrito e armazenado na variável textoDigitado. Podemos utilizar o template literals (${...}) para concatenar textos e valores de variáveis sem a necessidade da utilização do sinal de +. Além disso, o += faz com que novas inserções de comentário apareçam uma abaixo da outra, pois do contrário cada comentário feito sobrescreveria o anterior. O += nesse exemplo é o mesmo que escrever novosComentarios.innerHTML = novosComentarios.innerHTML + `<p>Seu comentário: ${textoDigitado}</p>`