// function adicionarTarefa(){
//     let tarefa = document.getElementsByClassName('adicionar-tarefa')
//     let novaTarefa = tarefa.value
    
// }  

let usuariosCadastrados = [
        ['Nicolas', 16, true]
        ['João', 20, false]
        ['15', 14, true]
]

        

function saudar(){
    let nome = document.getElementById('nome').value 
    let idade = document.getElementById('idade').value

    if(nome, idade){
       alert('olá '+ nome + ' você tem ' + idade + ' anos! ')
    }else if(nome === '', idade === ''){
        alert('nome e idade não informados')
    }
}  