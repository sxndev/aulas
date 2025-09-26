// setTimeout serve para executar um bloco de código após determinado tempo.
//  primeiro passamos o código que será executado e após a função, passamos o tempo em ms ( milissegundos )

setTimeout(function(){
    console.log('essa mensagem aparece no console após 5 segundos')
}, 5000)  

// o setInterval serve para executar uma ação repetidamente após um determinado intervalo de tempo passado em ms (milissegundos) , primeiro passamos a função a ser executada e depois colocamos o intervalo de tempo 

setInterval(() => {
    console.log('essa mensagem aparece a cada 2 segundos')
}, 2000)