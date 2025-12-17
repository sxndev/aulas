const root = document.getElementById('root');
const p = React.createElement('p', null, 'Olá Mundo')
//                            ('tipo do elemento', 'parametro', 'conteudo')
const reactRoot = ReactDOM.createRoot(root)

reactRoot.render(p)    