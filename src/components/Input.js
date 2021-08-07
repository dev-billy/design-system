import InputStyles from "../styles/input.module.scss";
import Icon from "./Icon";
function Input(props) {
  const { error, startIcon, endIcon, placeholder, disabled, helperText } =
    props;
  return (
    <div className={`${InputStyles.input} ${error ? InputStyles.error : ""}`}>
      <div
        className={`${InputStyles.inputController} ${
          startIcon ? InputStyles.iconStart : ""
        } ${endIcon ? InputStyles.iconEnd : ""}`}
      >
        <input
          type="text"
          placeholder={placeholder || "Placeholder"}
          disabled={disabled}
        />
        <label>Label</label>
        {startIcon && (
          <Icon
            name={startIcon}
            className={InputStyles.icon}
            style={{
              position: "absolute",
              top: "50%",
              marginLeft: "5px",
            }}
          />
        )}
        {endIcon && (
          <Icon
            name={endIcon}
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
      {helperText && <small>{helperText}</small>}
    </div>
  );
}

export default Input;
