/*
    O que é uma promise?

        são objetos no JavaScript que representam um valor que pode ou não estar disponível no futuro, ou seja uma operação assíncrona e seu valor resultante.

    Estados:

        - pending: estado inicial, nem cumprido nem rejeitado.
        - fulfilled: significa que a operação foi concluída com sucesso.
        - rejected: significa que  operação falhou.

    Porque são cruciais?
        
        porque nos permitem escrever código assíncrono de maneira mais legível e gerenciável

    THEN:
        serve pra gente capturar o resultado do fulfilled e o rejected

    CATCH:
        serve pra pegar o erro da promise

    nós temos o return do valor da promise que faz a promise voltar ao estado de pending, e conseguimos usar o .then() ou o .catch() através desse valor resultante

*/
const loadUsers = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "John"},
                {id: 2, name: "Jane"},
            ])
        }, 2000)
    })
}

const loadRepositories = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "Repo 1"},
                {id: 2, name: "Repo 2"},
            ])
        }, 2000)
    })
}

const loadEvents = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "Event 1"},
                {id: 2, name: "Event 2"},
            ])
        }, 2000)
    })
}

const loadAll = async () => {
    try {
        const result = await Promise.all([
            loadUsers(),
            loadRepositories(),
            loadEvents(),
    ]);

    console.log(result)

    } catch (error) {
        console.log(error)
    };

}

loadAll()

/*
    o método Promise.all() serve para pegar os resultados de várias promises, porém, se uma falhar, todas falham e e o resultado é o erro

    o Promise.allSettled nunca dá erro e retorna o resultado de todas as Promises, mesmo se forem rsolvidas ou rejeitadas, se uma falhar ela continua a execução e o resultado é uma array das Promises
*/