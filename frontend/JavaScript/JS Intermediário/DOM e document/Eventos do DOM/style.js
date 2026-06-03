//  Eventos adicionados através do JS:

//  let alerta = function mostrarAlerta() {
//    alert("Este é um alerta!");
//  }; 



// Eventos adicionados através do JS:

let selectDeEstado = document.querySelector("select[name='estado']");

selectDeEstado.addEventListener("change", function () {
  alert(`Mudou o select para ${selectDeEstado.value}`);
}); /* addEventListener: função que observa ações realizadas no elemento selecionado. A ação a ser observada deve ser uma string e adicionada como primeiro parâmetro. O segundo parâmetro deve ser a função contendo instruções do que deve ocorrer quando essa ação é feita.

Podemos adicionar um parâmetro para esta função parâmetro, o "event". Se dermos um console.log(event); é possível observar que ele é um objeto. Uma de suas chaves é "target", cujo valor é o elemento de onde o evento foi disparado (nesse caso, o elemento "select"). Outra chave notável do objeto event é a "type", cujo valor é o tipo do evento que está sendo observado (nesse caso, "change").

Para acessarmos o valor atual de select:

event.target.value;

>>> Também poderia ser escrito sem armazenar o elemento em uma variável:

document.querySelector("select[name='estado']").addEventListener("change", function () {
  alert("Mudou o select");
});

*/

// dentro do ".addEventListener()" nós adicionamos o nome do evento (click, mouseover, change e etc)




// --------------------
// 📌 Eventos de Mouse
// --------------------
/*
click           - Clique com o botão esquerdo
dblclick        - Clique duplo
mousedown       - Botão do mouse pressionado
mouseup         - Botão do mouse solto
mousemove       - Movimento do mouse
mouseenter      - Mouse entra (sem propagação)
mouseleave      - Mouse sai (sem propagação)
mouseover       - Mouse entra (com propagação)
mouseout        - Mouse sai (com propagação)
contextmenu     - Clique com o botão direito (menu de contexto)
*/

// ----------------------
// ⌨️ Eventos de Teclado
// ----------------------
/*
keydown         - Tecla pressionada
keyup           - Tecla liberada
keypress        - (Obsoleto) Tecla pressionada (caracteres)
*/

// ------------------------
// 🧑‍💻 Eventos de Formulário
// ------------------------
/*
submit          - Envio do formulário
change          - Mudança em input/select/textarea
input           - Entrada alterada em tempo real
focus           - Elemento ganhou foco
blur            - Elemento perdeu foco
reset           - Formulário foi resetado
select          - Texto selecionado dentro de input/textarea
*/

// ---------------------------------
// 🧭 Eventos da Janela / Documento
// ---------------------------------
/*
load            - Página ou recurso carregado
DOMContentLoaded- DOM totalmente carregado (sem esperar imagens)
resize          - Redimensionamento da janela
scroll          - Rolagem da página
unload          - Página sendo descarregada
beforeunload    - Antes de sair da página
error           - Erro em script, imagem ou outro recurso
*/

// -------------------------
// 📱 Eventos de Touch (Mobile)
// -------------------------
/*
touchstart      - Dedo tocou na tela
touchmove       - Dedo se moveu na tela
touchend        - Dedo saiu da tela
touchcancel     - Toque cancelado pelo sistema
*/

// ---------------------
// 🎤 Eventos de Mídia
// ---------------------
/*
play            - Início da reprodução de mídia
pause           - Reprodução pausada
ended           - Fim da mídia
volumechange    - Mudança de volume
timeupdate      - Atualização do tempo de reprodução
seeked          - Alteração da posição de reprodução
error           - Erro ao carregar a mídia
*/

// ---------------------------
// ⚡ Outros Eventos Comuns
// ---------------------------
/*
animationstart  - Animação CSS iniciou
animationend    - Animação CSS terminou
transitionend   - Transição CSS terminou
dragstart       - Início do arraste
drag            - Durante o arraste
dragend         - Fim do arraste
dragover        - Elemento sendo arrastado sobre outro
drop            - Soltar o item arrastado
dragleave       - Elemento sendo deixado
pointerdown     - Ponteiro pressionado (mouse, caneta, etc)
pointerup       - Ponteiro liberado
pointermove     - Ponteiro movido
*/
