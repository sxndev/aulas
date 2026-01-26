import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Posts } from './posts'
import { Post } from './post'
const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Posts />} />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }


// rotas são caminhos específicos dentro do nosso site que levam até determinadas páginas, para trabalhar com rotas no React, utilizamos a biblioteca react-router-dom, no exemplo acima importamos os componentes necessários dessa biblioteca, como BrowserRouter, Route e Routes. O componente BrowserRouter envolve toda a aplicação e permite o uso de rotas. O componente Routes é usado para definir um conjunto de rotas, e o componente Route define uma rota específica, associando um caminho (path) a um componente que será renderizado quando esse caminho for acessado. No exemplo, definimos uma rota para a página inicial ('/') que renderiza o componente Posts.