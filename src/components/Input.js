import InputStyles from "../styles/input.module.scss";
function Input(props) {
  return (
    <div className={InputStyles.input}>
      <div className={InputStyles.inputController}>
        <input type="text" placeholder={props.placeholder || "Placeholder"} />
        <label>Label</label>
      </div>
      {props.helperText && <small>{props.helperText}</small>}
    </div>
  );
}

export default Input;
