import InputStyles from "../styles/input.module.scss";
import Icon from "./Icon";
function Input(props) {
  return (
    <div
      className={`${InputStyles.input} ${props.error ? InputStyles.error : ""}`}
    >
      <div
        className={`${InputStyles.inputController} ${
          props.startIcon ? InputStyles.iconStart : ""
        } ${props.endIcon ? InputStyles.iconEnd : ""}`}
      >
        <input type="text" placeholder={props.placeholder || "Placeholder"} />
        <label>Label</label>
        {props.startIcon && (
          <Icon
            name={props.startIcon}
            className={InputStyles.icon}
            style={{
              position: "absolute",
              top: "50%",
              marginLeft: "5px",
            }}
          />
        )}
        {props.endIcon && (
          <Icon
            name={props.endIcon}
            className={InputStyles.icon}
            style={{
              position: "absolute",
              top: "50%",
              left: "100%",
              transform: "translateX(-115%)",
            }}
          />
        )}
      </div>
      {props.helperText && <small>{props.helperText}</small>}
    </div>
  );
}

export default Input;
