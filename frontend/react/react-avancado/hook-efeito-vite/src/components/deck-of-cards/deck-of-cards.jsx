import { useState, useEffect } from "react";

async function createDeck() {
    const response = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const deck = await response.json();
    return deck.deck_id;
}

async function getCards(deckId) {
    const response = await fetch(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
    );
    return await response.json();
}

const DeckOfCards = () => {
    const [deck, setDeck] = useState({
        cards: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const deckId = await createDeck();
            const data = await getCards(deckId);

            setDeck({
                cards: data.cards,
            });
        };
        fetchData();
    }, []); // um array vazio é colocado como segundo parâmetro para indicar que o useEffect deve ser rodado somente uma vez

    return (
        <section>
            <ul>
                {deck.cards.map((card, index) => {
                    return (
                        <li key={index}>
                            <img src={card.image} alt={card.value} />
                        </li>
                    );
                })}
            </ul>
        </section>
    );

    // constructor(){
    //     console.log('constructor')
    //     super()
    //     this.state = {
    //         cards: []
    //     }
    // }

    // async componentDidMount(){
    //     console.log('componentDidMount')
    //     const deckId = await createDeck()
    //     const data = await getCards(deckId)

    //     this.setState({
    //         cards: data.cards
    //     })
    // }

    // render(){
    //     console.log('render')
    //     return (
    //         <section>
    //             <ul>
    //                 {
    //                     this.state.cards.map((card, index) => {
    //                         return (
    //                             <li key={index}>
    //                                 <img src={card.image} alt={card.value} />
    //                             </li>
    //                         )
    //                     })
    //                 }
    //             </ul>
    //         </section>
    //     )
    // }
};

export default DeckOfCards;

// o useState é um hook que permite adicionar o estado do React a componentes funcionais, ele retorna um par de valores: o estado atual e uma função que permite atualizá-lo. No exemplo acima, usamos o useState para criar um estado chamado deck, que inicialmente é um objeto com uma propriedade cards vazia. A função setDeck é usada para atualizar o estado quando os dados das cartas são buscados da API.

// o useEffect é um hook que permite executar efeitos colaterais em componentes funcionais, como buscar dados, configurar assinaturas ou modificar o DOM. No exemplo acima, usamos o useEffect para buscar os dados das cartas da API quando o componente é montado. O array vazio [] passado como segundo argumento indica que o efeito deve ser executado apenas uma vez, semelhante ao comportamento do componentDidMount em componentes de classe.