import { useSelector } from "react-redux";
import { Products } from "../../components/products";


const CartProducts = () => {
  const cartProducts = useSelector(state => state.cartProducts)
  
  return (
    <main>
      <h1>Cart Products</h1>
      <section>
        <Products products={cartProducts} />  
      </section> 
    </main>
  );
};

// no código acima o useSeletor devolveu a lista de produtos que estão no carrinho, que está armazenada na propriedade cartProducts do estado global da aplicação. essa lista foi passada como props para o componente Products, que é responsável por exibir os produtos na tela.

export { CartProducts };
