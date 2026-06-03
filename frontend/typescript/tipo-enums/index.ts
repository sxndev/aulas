// Enums no TypeScript são uma ferramenta poderosa para lidar com conjuntos de valores constantes no desenvolvimento de software. Eles são simples, mas ainda assim oferecem muitos recursos para tornar o código mais organizado e legível.

// para criar um enum, usamos a palavra-chave 'enum' seguida do nome do enum e suas opções entre chaves, o enum deve ser criado com a primeira letra maiúscula ou todas as letras maiúsculas, e suas propriedades devem ser criadas com a primeira letra maiúscula.

// enum do tipo numérico:
enum Colors {
    Red = 1, // podemos definir o valor inicial caso não queiramos que comece do zero
    Blue,
    Green
}
// para percorrer o enum, podemos usar um loop for...in
for (const key in Colors) {
   console.log(key)
}

// function showColor(color: Colors) {
//     console.log(color)
// }

// showColor(Colors.Red)


enum TradeType {
    ACAO = 9281,
    TESOURO_DIRETO = 3221,
    TESOURO_SELIC = 6554
}

// saveTrade(TradeType.ACAO) nesse exemplo, a função saveTrade aceitaria apenas os valores definidos no enum TradeType


// enums também podem ter valor string

enum Gender {
    M = 'Masculino',
    F = 'Feminino'
}

// para pegar dados de um enum

enum StatusCode {
    OK = 200,
    BadRequest = 400,
}

const ok = StatusCode.OK // 200 
const indexOf = StatusCode['OK'] // 200 
const stringBadRequest = StatusCode[400] // BadRequest
