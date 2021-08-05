import ButtonStyles from "../styles/button.module.scss";
import Icon from "./Icon";
function Button(props) {
  const { variant, color, disableShadow, disabled, size } = props;
  if (disabled) {
    return (
      <button
        className={`${ButtonStyles.button} ${ButtonStyles[`button_${size}`]}  ${
          ButtonStyles[`${variant}_disabled`]
        }`}
      >
        {props.startIcon && (
          <Icon name={props.startIcon} style={{ marginRight: "5px" }} />
        )}
        {props.children || "Default"}
        {props.endIcon && (
          <Icon name={props.endIcon} style={{ marginLeft: "5px" }} />
        )}
      </button>
    );
  }
  if (disableShadow) {
    return (
      <button
        className={`${ButtonStyles.button} ${ButtonStyles[`button_${size}`]} ${
          ButtonStyles[`${variant}_${color}`]
        }`}
      >
        {props.startIcon && (
          <Icon name={props.startIcon} style={{ marginRight: "5px" }} />
        )}
        {props.children || "Default"}
        {props.endIcon && (
          <Icon name={props.endIcon} style={{ marginLeft: "5px" }} />
        )}
      </button>
    );
  }
  return (
    <button
      className={`${ButtonStyles.button} ${ButtonStyles[`button_${size}`]} ${
        ButtonStyles[`${variant}_${color}`]
      } ${ButtonStyles.withShadow}`}
    >
      {props.startIcon && (
        <Icon name={props.startIcon} style={{ marginRight: "5px" }} />
      )}
      {props.children || "Default"}
      {props.endIcon && (
        <Icon name={props.endIcon} style={{ marginLeft: "5px" }} />
      )}
    </button>
  );
}
Button.propTypes = {};
Button.defaultProps = {
  variant: "default",
  color: "default",
  size: "md",
};

export default Button;
