async function aconselhar() {
  try {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    const bilhete = await resposta.json();
    const bilheteId = await bilhete.slip.bilheteId
    const conselho = await bilhete.slip.advice;
    document.getElementById("text-content").innerText = conselho;
  } catch (e) {
    console.log(e);
    document.getElementById("text-content").innerText =
      "Conselho não encontrado :( , aperte o botão novamente";
  }
}
aconselhar();
    document.getElementsByClassName('btn')[0].addEventListener('click', aconselhar)
