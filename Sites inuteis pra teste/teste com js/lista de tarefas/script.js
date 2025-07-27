// Seleciona o input onde digitamos a nova tarefa
const inputTarefa = document.getElementById("novaTarefa");

// Seleciona o UL onde as tarefas serão adicionadas
const lista = document.getElementById("listaTarefas");

/*
Função principal que adiciona uma nova tarefa à lista
*/
function adicionarTarefa() {
  // Pega o texto digitado
  const texto = inputTarefa.value.trim();

  // Validação: se estiver vazio, não faz nada
  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  // Cria um novo elemento <li>
  const item = document.createElement("li");

  // Adiciona o texto da tarefa dentro do <li>
  item.innerText = texto;

  // Adiciona evento de clique para marcar como concluída
  item.addEventListener("click", () => {
    item.classList.toggle("concluida"); // alterna a classe CSS
  });

  // Cria um botão para excluir a tarefa
  const botaoExcluir = document.createElement("button");
  botaoExcluir.innerText = "X";
  botaoExcluir.classList.add("delete");

  // Adiciona um evento de clique para remover a tarefa
  botaoExcluir.addEventListener("click", (event) => {
    event.stopPropagation(); // impede que o clique marque como concluído
    lista.removeChild(item); // remove o <li> da lista
  });

  // Adiciona o botão ao <li>
  item.appendChild(botaoExcluir);

  // Adiciona o <li> na <ul>
  lista.appendChild(item);

  // Limpa o campo de entrada
  inputTarefa.value = "";
}
