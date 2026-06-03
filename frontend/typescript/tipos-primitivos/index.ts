function sendMessage(userName: string, isLogged: boolean) {
   console.log(`Olá ${userName}. Você ${!isLogged? " não" : ""} pode logar.`)
}

const userName = 'Beto'
const isLogged = true

sendMessage(userName, isLogged)

const nome : string = 'beto'
let idade : number = 30
const mandouEmail : boolean = true

// para declarar variáveis no typescript é necessário informar o tipo da variável
// os tipos primitivos mais comuns são: string, number, boolean

// para declarar arrays, é necessário informar o tipo dos elementos do array
let idades : number[] = [23, 45, 67]
let nomes : string[] = ['beto', 'ana', 'joão']
let mandouEmails : boolean[] = [true, false, true]

// também podemos declarar da seguinte forma

let idades2 : Array<number> = [23, 45, 67]
let nomes2 : Array<string> = ['beto', 'ana', 'joão']
let mandouEmails2 : Array<boolean> = [true, false, true]

// o any é um tipo que aceita qualquer valor, mas seu uso não é recomendado

let obj : any = {x:0}

// para declarar um objeto só é preciso listar as propriedades e seus tipos

let objeto : {x: number; y: number; } = {x: 10, y: 20}