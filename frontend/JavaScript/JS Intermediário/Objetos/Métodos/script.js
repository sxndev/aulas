// um método é a utilização de uma propriedade dentro de um objeto, e utiliza o . para navegar dentro do objeto e usar uma propriedade dele

let usuario = {
    nome: 'nicolas',
    excluir: function(){
        console.log('O usuário ' + this.nome + ' foi excluído')
    }
}

usuario.excluir() // isso é chamado de método

// eu devo usar o () pois isso vai realmente chamar a função
 