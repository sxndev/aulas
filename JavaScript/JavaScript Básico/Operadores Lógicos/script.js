/*
    OPERADORES LÓGICOS:

    comparar valores:
    == ---- igual ---- a==b ---- verdadeiro se a for igual a b 
    == ---- igual ---- a==b ---- verdadeiro se a for igual a b
    === ---- idêntico ---- a === b ---- verdadeiro se a for idêntico a b  (compara valor e tipo)
    !== ---- não idêntico ---- a !== ---- verdadeiro se a não for idêntico a b (vê o valor e o tipo)
    != ---- diferente --- a != b ---- verdadeiro se o a for diferente de b 
    < ---- menor que ---- a < b ---- verdadeiro se a for menor que b
    <= ---- menor ou igual que ---- a <= b ---- verdadeiro quando a for menor ou igual a b
    > ---- maior que ---- a > b ---- verdadeiro quando a for maior que b
    >= ---- maior ou igual que que ---- a >= b ---- verdadeiro quando a for maior ou igual a b



*/

// const a = 10
// const b = 3

// console.log(a >= b)

const a = 2 
const b = 2

console.log( a === b && a <= b)
// V e V = V

console.log(a === b && a < b)
// V e F = F

console.log(a > b && a === b)
// F e V = F

console.log(a > b && a < b)
// F e F = F

// OR

console.log(a === b || a <= b)
// V ou V = V

console.log( a === b || a < b)
// V ou F = V

console.log( a > b || a === b)
// F ou V = V


console.log( a > b || a < b)
// F ou F = F

//  NOT ( inverte a expressão)

console.log(!( a === b)) // é true, porém a ! inverte o valor

console.log(!( a < b)) // é false, porém a ! inverte o valor
















