    const nome = prompt('Olá aventureiro! me diga o seu nome')

    const resposta = confirm('Seja bem vindo '+ nome +'! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?')

    if(resposta){
        alert('Ótimo! Nós temos as melhores camas de toda a região')
    }else{
        alert('Que pena! Você parecia ser uma pessoa mais legal')
    }