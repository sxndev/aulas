// para tornar nossas importações mais fáceis, no arquivo tsconfig.json nós adicionamos a propriedade "baseUrl" : './src' para definir ela como pasta principal

// o segundo parâmetro pode ser o "paths", dentro dela a gente pode colocar quais pastas serão encurtadas, para isso ele recebe dois parãmetros, o primeiro é o apelido que queremos dar para a pasta e o segundo é o caminho real dela
// Exemplo:
// "paths": {
//   "@components/*": ["components/*"], primeiro vem o apelido, depois o caminho real
//   "@assets/*": ["assets/*"]
// }

// essas configuraç~es vão permitir que a gente importe arquivos dessas pastas usando o apelido, por exemplo:
// import Button from '@components/Button';
// import Logo from '@assets/logo.png';