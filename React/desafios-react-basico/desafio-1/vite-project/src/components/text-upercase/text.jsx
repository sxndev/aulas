import "./text.css";

const Text = ({children, color}) => {
  return (
    <p className="text" style={{ color: color }} >
        {children}
    </p>
  );
};

Text.defaultProps = {
  color: "yellow",
};
export default Text;
