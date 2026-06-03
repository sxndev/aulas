import React from "react";
import "./card.css";

const Card = ({ children, color, showCardColor }) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: color }}
      onClick={() => showCardColor(color)}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  color: "red",
};

export default Card;

// class Card extends React.Component {
//     render() {
//         return (
//             <div className='card'>
//                 <h3>{this.props.tittle}</h3>
//                 <p>esse é um texto do card</p>
//             </div>
//         )
//     }
// }
