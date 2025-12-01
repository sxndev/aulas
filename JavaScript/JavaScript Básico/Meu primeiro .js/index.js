function teste() {
  alert("seja bem vindo ao meu primeiro teste com JavaScript!");
  let nome = prompt("olá, qual é o seu nome?");
  if (nome) {
    alert("eai, " + nome + ", seja bem vindo !");
  } else {
    alert("você não me disse seu nome :(");
  }
  let idade = prompt("quantos anos você tem?");

  if (idade) {
    alert("caramba! " + nome + ", você tem " + idade + " anos, que legal!");
  } else {
    alert("você não me falou sua idade :(");
  }
  alert("esse foi meu primeiro código js com a ajuda de uma IA")  
    let nota = prompt('me dê a uma nota de 0 a 10 para o meu código')

    if(nota >= 6){
      alert('obrigado pela sua nota! :)')
      } 

    else{
      alert('poxa... eu vou melhorar meu código, obrigado pelo seu feedback ;)')
    }
}