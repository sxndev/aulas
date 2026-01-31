import './App.css';
import { ThemeTogglerButton } from './components/theme-toggle-button/theme-toggler-button';
import { ThemeProvider } from './contexts/theme-context';
import { Card } from './components/card/card';
function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton/>
      <Card/>
    </ThemeProvider>
  );
}   

export default App; 

/*
  a context api permite compartilhar estados entre componentes sem a necessidade de passar props manualmente por cada nível da árvore de componentes.
  para criar um contexto, usamos a função createContext do react.
  o provider é um componente que envolve os componentes que precisam acessar o contexto.
  o valor do contexto é passado através da prop value do provider.
  para consumir o contexto, usamos o hook useContext, passando o contexto criado como argumento. e para usá-lo nos componentes filhos, basta chamar o hook useContext e acessar os valores fornecidos pelo provider.
  
*/