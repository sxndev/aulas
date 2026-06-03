const imagens = document.querySelectorAll('.slide')
const setaVoltar = document.getElementById('.seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

let imagemAtual = 0 // servirá para usar no array de imagens

    setaAvancar.addEventListener('click', () => {

        if(imagemAtual === imagens.length -1){
            return
        } // esse if serve para verificar se a imagem atual é a última imagem do slider, se o resultado for a ultima imagem (true), ele cai no "return" e o resto dos códigos não são executados porque não tem mais imagem para mostrar. se não tivesse esse "if", o evento de click continuaria sendo executado mesmo sem ter imagem para mostrar. o "-1" foi usado porque o índice do array começa do 0, o tamanho do array é 4 (quantidade de imagens), e com o -1 fica 3

        esconderImagemAberta(); // função que esconde a imagem atual

        imagemAtual++; // incrementa um valor a imagem atual

        imagens[imagemAtual].classList.add('mostrar') // entra no array de imagens, acessa a imagem pelo índice utilizando o valor da variável "imagemAtual" e adicion a classe "mostrar" para mostrar a imagem pelo seu respectivo índice no array de imagens

        mostrarOuEsconderSetas()
    })

    setaVoltar.addEventListener('click', () => {
        if(imagemAtual === 0){
            return
        }
        esconderImagemAberta();

        imagemAtual--;

        imagens[imagemAtual].classList.add('mostrar')

        mostrarOuEsconderSetas()
    })
        function esconderImagemAberta(){
            const imagemAberta = document.querySelector('.mostrar')
            imagemAberta.classList.remove();
        }    

        function mostrarOuEsconderSetas(){
            const naoEhAPrimeiraImagem = imagemAtual !== 0
            if(naoEhAPrimeiraImagem) {
                setaVoltar.classList.remove('opacidade')
            } else {
                setaVoltar.classList.add('opacidade')
            }

            const ultimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
            if(ultimaImagem){
                setaAvancar.classList.add('opacidade')
            } else{
                setaAvancar.classList.remove('opacidade')
            }
        }
        