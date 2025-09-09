    
    let button = document.getElementById('btn')
    let content = document.getElementsByClassName('content')[0]
    let menu = document.getElementsByTagName('ul')[0]  
    let menuItens = document.getElementsByClassName('menu-itens')
    let oneMenuItem = menuItens.length

    button.addEventListener('click', function(){
    
    menu.style.display = 'flex'        
    menu.classList.add('.slideIn')
         
    })
 