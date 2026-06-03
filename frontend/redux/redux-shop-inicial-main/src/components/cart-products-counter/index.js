import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const CartProductsCounter = () => {

    const cartProducts= useSelector(state => state.cartProducts)
// o useSelector é um hook do react-redux que permite acessar o estado da store do redux dentro de um componente funcional do react. ele recebe como parâmetro uma função que recebe o estado da store e retorna o valor desejado. nesse exemplo, estamos acessando a propriedade cartProducts do estado da store e armazenando em uma constante chamada cartProducts.

  return (
    <Container>
      <Link to="/cart-products">
        <FontAwesomeIcon icon={faCartPlus} />
        <span>{cartProducts.length}</span>
      </Link> 
    </Container>
  );
};

const Container = styled.div`
  a {
    position: relative;
  }

  span {
    display: inline-block;
    text-align: center;
    line-height: 12px;
    width: 12px;
    height: 12px;
    background-color: red;
    color: #ffffff;
    border-radius: 50%;
    font-size: 10px;

    position: absolute;
    top: -7px;
    right: -6px;
  }
`;
