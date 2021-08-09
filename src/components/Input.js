import InputStyles from "../styles/input.module.scss";
import Icon from "./Icon";
function Input(props) {
  const {
    error,
    startIcon,
    endIcon,
    size,
    placeholder,
    value,
    disabled,
    fullwidth,
    helperText,
    multiline,
    row,
  } = props;
  if (multiline) {
    return (
      <div className={`${InputStyles.input} ${error ? InputStyles.error : ""}`}>
        <div
          className={`${InputStyles.inputController}  
          ${fullwidth ? InputStyles.fullwidth : ""}
          `}
        >
          <textarea
            type="text"
            placeholder={placeholder || "Placeholder"}
            disabled={disabled}
            rows={row}
            value={value}
          />
          <label>Label</label>
        </div>
        {helperText && <small>{helperText}</small>}
      </div>
    );
  }

  return (
    <div className={`${InputStyles.input} ${error ? InputStyles.error : ""}`}>
      <div
        className={`${InputStyles.inputController} ${InputStyles[size]} ${
          startIcon ? InputStyles.iconStart : ""
        } ${endIcon ? InputStyles.iconEnd : ""}
        ${fullwidth ? InputStyles.fullwidth : ""}
        `}
      >
        <input
          type="text"
          placeholder={placeholder || "Placeholder"}
          disabled={disabled}
          value={value}
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
Input.defaultProps = {
  size: "md",
};

export default Input;
