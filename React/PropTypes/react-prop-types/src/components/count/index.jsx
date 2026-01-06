import Proptypes from "prop-types";
import "./style.css";

const Count = (props) => {
  return (
    <>
      <div className="card">
          <button onClick={props.incrementCount}>
            count is {props.count}
          </button>
        </div>
    </>
  );
};

Count.proptypes = {
  count: Proptypes.number.isRequired,
  incrementCount: Proptypes.func.isRequired,
}

export default Count; 