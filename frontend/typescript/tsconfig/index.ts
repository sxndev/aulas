// para configurar um arquivo tsconfig.json padrão para o projeto, podemos acessar o terminal git e executar o comando:
// tsc --init

// Isso criará um arquivo tsconfig.json na raiz do projeto com as configurações padrão do TypeScript. 
// Podemos então editar esse arquivo para ajustar as configurações conforme necessário para o nosso projeto.

// o arquivo de configuração não é obrigatório para compilar arquivos TypeScript, se ele não for colocado, o TS vai inferir os valores padrão caso não tenha o tsconfig, mas caso precise alterar alguma configuração, o arquivo deve ser criado

// o arquivo tsconfig.json é importante, especialmente em projetos maiores, pois permite definir opções de compilação e incluir/excluir arquivos de forma centralizada.

function print(age: number){
    console.log(age)
}