const botao = document.getElementById('btn');    
const square = document.getElementById('quadrado');

    botao.addEventListener('click', function(){
        if(square.classList.contains('background-blue') === false){
            square.classList.add('background-blue')
        } else{
            square.classList.remove('background-blue')        
        }  
    });   