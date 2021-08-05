import ButtonStyles from "../styles/button.module.scss";

function Button(props) {
  const { variant, color, disableShadow, disabled } = props;
  if (disabled) {
    return (
      <button
        className={`${ButtonStyles.button} ${
          ButtonStyles[`${variant}_disabled`]
        }`}
      >
        {props.children || "Disabled"}
      </button>
    );
  }
  if (disableShadow) {
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
  return (
    <button
      className={`${ButtonStyles.button} ${
        ButtonStyles[`${variant}_${color}`]
      } ${ButtonStyles.withShadow}`}
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
