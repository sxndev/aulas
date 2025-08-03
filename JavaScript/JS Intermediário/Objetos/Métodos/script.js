// um método nada mais é do que uma condição

let usuario = {
    nome: 'nicolas',
    excluir: function(){
        console.log('O usuário ' + this.nome + ' foi excluído')
    }
}

usuario.excluir() // chamei uma propriedade do objeto e ela foi executada

// eu devo usar o () pois isso vai realmente chamar a função
