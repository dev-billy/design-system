import ButtonStyles from "../styles/button.module.scss";

function Button(props) {
  const { variant, color } = props;

  return (
    <button
      className={`${ButtonStyles.button} ${
        ButtonStyles[`${variant}_${color}`]
      }`}
    >
      {props.children || "Default"}
    </button>
  );
}
Button.propTypes = {};
Button.defaultProps = {
  variant: "default",
  color: "default",
};

export default Button;
