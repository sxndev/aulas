const kindOf = require('kind-of'); 
const testeDeBooleano = true
const testeDeTexto = 'texto'
console.log(kindOf(testeDeTexto))

// kind-of é um pacote que serve para validar/verificar o tipo de uma variável no js (booleano, string e etc)

/* no terminal eu uso "npm init" para começar a fazer o arquivo JSON do nosso pacote, ordem das perguntas:

    - nome do nosso pacote
    - versão do pacote
    - descrição
    - entry point: ( arquivo JS principal, é o arquivo JS que vai ser executado primeiro)
    - test command: comando para um teste de software no nosso projeto
    - git repository: repositório do nosso projeto no github
    - palavras chaves
    - autor
    - licença
    - analisar o arquivo JSON e verificar se está tudo certo
*/

/*
    comandos do npm:

        - npm install nome-do-pacote --save: instala o pacote, e o "--save" serve para indicar que o pacote seja instalado na lista de dependencias do packages.json

        e o arquivo "package-lock.json" vai informar a árvore de dependências de pacotes do nosso projeto, não só os pacotes mas também a versão dos pacotes
        
    se meu amigo for no meu repositório do github e enviar meu projeto pra máquina dele, será enviado o arquivo "package.json" , esse arquivo vai dizer qual pacote meu projeto precisa ter pra ser rodado na parte "dependencies", aí meu amigo digit "npm install" e o próprio node vai ler o arquivo .json e ver quais pacotes meu projeto precisa ter pra ser rodado e esses pacotes serão baixados automaticamente, a pasta node_modules não pode ser versionada e nem enviada para o reposítorio no github, ela deve estar no arquivo gitignore
*/