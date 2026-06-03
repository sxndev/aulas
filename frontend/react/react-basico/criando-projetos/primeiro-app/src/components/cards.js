import Card from "./card/card";

const showCardColor = (color) => {
    console.log(color)
}

const cardsTitle = ["Título do card 1", "Título do card 2", "Título do card 3"];

const Cards = () => {
  return (
    <div>
      <h2>Meus cards</h2>

      <div>
        {cardsTitle.map((cardTitle, index) => (
            <Card 
                key={index} 
                showCardColor={showCardColor}
            > 

              <h3>{cardTitle}</h3>    
            </Card>   
            ) 
          )}

            <Card color="blue" showCardColor={showCardColor}> 
              <h3>card com fundo azul</h3>    
              <p>esse é um texto do card 1</p>
            </Card>   
              
      </div>   
    </div>
  );
};

export default Cards;
