// type anotation é uma forma de se referir a tipagem em funções no TS

// o parâmetro name está sendo tipado é do tipo string e garantindo que o valor passado para o primeiro parâmetro seja do tipo string

function greet(name: string){
    console.log(`Olá ${name}`)
}

greet('nicolas')

// na função abaixo eu estou definindo que o retorno da fun~çao seja do tipo number

function doubleNumber(number: number) : number {
    return number * 2
}

// com os dois pontos após a declaração dos parâmetro eu deixo explícito que o valor retornado será um número, porque se não o JavaScript tenta inferir e tenta adivinhar que o retorno da função seja de um tipo, pois se o JavaScript tentar inferir e errar, vai dar problema no código


const resultado = doubleNumber(3)
console.log(resultado)
