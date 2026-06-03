import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProductsToCart } from "../../store/actions/cart";

const Product = ({ name, price }) => {

  const dispatch = useDispatch(); // aqui o use dispatch recebe a função que cria a ação de adicionar produtos ao carrinho e com ele eu consigo disparar essa ação lá no onClick do botão, o use dispatch recebe como parâmetro a ação que eu quero disparar

  return (
    <ListItem>
      <div>
        <h3>{name}</h3>
        <p>
          {price.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button onClick={() => dispatch(addProductsToCart({ name, price }))} >  
        Adicionar ao carrinho
      </button>
       
    </ListItem>
      // passando o produto dessa maneira ( linha 21), o react entende que eu tô passando um produto que possui essas propriedades 
  ); 
};

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background-color: #2f3042;

  h3 {
      margin-bottom: 10px;
  }

  button {
      align-self: center;
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #ff7272;
      color: #ffffff;
      cursor: pointer;
  }
`;

export { Product };
