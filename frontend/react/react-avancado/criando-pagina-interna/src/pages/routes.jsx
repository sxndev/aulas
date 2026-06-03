import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Posts } from './posts'
import { Post } from "./post";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Posts />} />
            <Route exact path="/post/:id" element={<Post />} />
        </Routes>
    </BrowserRouter>
);

export { AppRoutes }

/* a palavra chave "exact" é usada para garantir que a rota seja correspondida exatamente, ou seja, apenas quando o caminho for exatamente igual ao especificado. Sem "exact", a rota "/" corresponderia a todas as rotas que começam com "/", incluindo "/post/:id".

 A partir da versão 6 do React Router a propriedade exact (utilizada no componente Route) não é mais necessária, uma vez que o comportamento de correspondência exata se tornou o padrão do componente. O professor ainda a utiliza no vídeo pois a sua versão é a 5.

 a palavra chave "path" define o caminho da URL que será usado para identificar a rota. Por exemplo, o caminho "/" corresponde à página principal da aplicação, enquanto "/post/:id" corresponde a uma página específica de um post, onde ":id" é um parâmetro que pode ser substituído por qualquer valor.

 a palavra chave "element" é usada para especificar o componente que deve ser renderizado quando a rota correspondente for acessada. Por exemplo, quando o usuário acessar a rota "/", o componente <Posts /> será renderizado, e quando acessar "/post/:id", o componente <Post /> será renderizado. */