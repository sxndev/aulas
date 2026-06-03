import { useQuery } from "react-query";

export const Main = () => {
  const fetchData = async () => {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    return await response.json();
  };

  const { data, isLoading, isError, error } = useQuery("cep", fetchData, {
    refetchOnWindowFocus: false,
  }); // o useQuery receb dois parâmetros, o primeiro é a chave única da query e o segundo é a função que retorna uma promise
  console.log(data);

  if(isLoading) return <p>informações sendo carregadas...</p>
  if(isError) return <p>ocorreu m ero desconhecido { error } </p> 
  return (
    <>
      <ul>
        {
          <li>
            <li>{data.logradouro}</li>
            <li>{data.bairro}</li>
            <li>{data.localidade}</li>
            <li>{data.uf}</li>
          </li>
        }
      </ul>
    </>
  );
};

/* o react query é uma biblioteca para gerenciamento de estado assíncrono, ele facilita o processo de buscar, armazenar em cache e sincronizar dados em aplicações React. a gente pode usar o react query para buscar dados de uma API, armazenar esses dados em cache e sincronizar esses dados com o servidor de forma automática. os objetos usados acima foram:
 
        data - retorna os dados da api 
        isLoading - retorna true se os dados estão sendo carregados
        isError - retorna true se ocorreu um erro
        error - retorna o erro ocorrido

    esses métodos vem do hook useQuery que é usado para buscar dados de uma API. o useQuery recebe três parâmetros, o primeiro é a chave única da query, o segundo é a função que retorna uma promise e o terceiro é um objeto de opções onde podemos configurar o comportamento do useQuery. no exemplo acima usamos a opção refetchOnWindowFocus para evitar que os dados sejam buscados novamente quando a janela do navegador for focada.  por padrão o react query busca os dados novamente quando a janela do navegador é focada, mas nesse caso não queremos esse comportamento, então definimos refetchOnWindowFocus como false.

*/
