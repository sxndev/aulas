const inputs = document.getElementsByClassName('inputs')
const btn = document.getElementById('btn')

    btn.addEventListener('click', () => {
        for(let i = 0; i < inputs.length; i++ ){
            if(inputs[i].value !== ""){
                inputs[i].classList.remove('borda-vermelha')
                inputs[i].classList.add('borda-verde')
            } else {
                inputs[i].classList.remove('borda-verde')
                inputs[i].classList.add('borda-vermelha')
            }
        } 
    })