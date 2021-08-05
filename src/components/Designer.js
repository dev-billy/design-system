import Button from "./Button";
import DesignerStyles from "../styles/buttonDesigner.module.scss";
function Designer() {
  return (
    <div className={DesignerStyles.designer}>
      <div className={DesignerStyles.properties}>
        <h4>Properties</h4>
        <form>
          <div className={DesignerStyles.grouped}>
            <label
              className={`${DesignerStyles.label} ${DesignerStyles.checkbox}`}
              htmlFor="icon"
            >
              <input type="checkbox" name="icon" />
              <h5>Icon</h5>
            </label>
            <label
              className={`${DesignerStyles.label} ${DesignerStyles.checkbox}`}
              htmlFor="shadow"
            >
              <input type="checkbox" name="shadow" />
              <h5>Shadow</h5>
            </label>
          </div>
          <div className={DesignerStyles.grouped}>
            <label className={DesignerStyles.label} htmlFor="icon-select">
              <h5>Select an Icon</h5>
              <select name="icon-select">
                <option>local_grocery_store</option>
              </select>
            </label>
            <label className={DesignerStyles.label} htmlFor="icon-position">
              <h5>Position</h5>
              <select name="icon-select">
                <option>start</option>
                <option>end</option>
              </select>
            </label>
          </div>
          <div className={DesignerStyles.grouped}>
            <label className={DesignerStyles.label} htmlFor="color">
              <h5>Color:</h5>
              <select name="color">
                <option>default</option>
                <option>primary</option>
                <option>secondary</option>
                <option>danger</option>
              </select>
            </label>
            <label className={DesignerStyles.label} htmlFor="variant">
              <h5>Variant:</h5>
              <select name="variant">
                <option>default</option>
                <option>outlined</option>
                <option>text</option>
              </select>
            </label>
          </div>
          <label className={DesignerStyles.label} htmlFor="text">
            <h5>Text</h5>
            <input type="text" name="btn_text" />
          </label>
        </form>
      </div>
      <div className={DesignerStyles.separator}></div>
      <div className={DesignerStyles.result}>
        <h4>Result</h4>
        <div className={DesignerStyles.resultItems}>
          <div className={DesignerStyles.resultBtn}>
            <Button />
          </div>
          <div className={DesignerStyles.codeArea}>
            <small>Code</small>
            <textarea rows="5" disabled></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designer;
