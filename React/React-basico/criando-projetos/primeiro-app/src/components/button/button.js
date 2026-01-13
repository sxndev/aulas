
import './button.css'

const sayHello = () => {
    console.log('Olá')   
}
// Componente de função:
const Button = (props) => {
    return <button className="btn" onClick = {sayHello} >{props.label}</button> 
}

// passando defaltProps (propriedades padrão), posso passar mais props padrão para o componente

Button.defaultProps = {
    label:'Clique aqui'

}


// Componente de classe:

// class Button extends React.Component {
//     render() {
//         return <button className="btn">{this.props.label}</button>
//     }
// }

export default Button 