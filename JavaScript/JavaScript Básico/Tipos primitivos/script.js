/*tipos primitivos:
    string
    number
    booleam 
    null  
    undefined
*/
    //string representa um dado do tipo texto, pode ser usado com aspas simples ou duplas
    let nome = 'nicolas'

    //number, para ser um tipo primitivo number, é só escrever um número sem aspas
    let numero = 123

    //booleam, tem dois tipos: true e false
    let usuarioVerificado = true

    //exemplo do uso de um booleam 

    if(usuarioVerificado){
        console.log("usuário verificado")
    }
    else{
        console.log("usuário não verificado")
    }

    //o tipo null vai apontar para um endereço de memória invalido ou inexistente

    let pessoa = null 

    //undefined é quando o JavaScript não conseguiu definir o tipo da variável