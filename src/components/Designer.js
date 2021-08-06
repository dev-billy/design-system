import { useState } from "react";
import Button from "./Button";
import DesignerStyles from "../styles/buttonDesigner.module.scss";
function Designer() {
  const [properties, setProperties] = useState({
    icon: false,
    shadow: true,
    select_icon: "local_grocery_store",
    position: "start",
    color: "default",
    variant: "default",
    text: "Default",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setProperties({ ...properties, [name]: checked });
    } else {
      setProperties({ ...properties, [name]: value });
    }
  };
  let fieldProps = {
    disableShadow: !properties.shadow,
    color: properties.color,
    variant: properties.variant,
  };
  if (properties.icon) {
    fieldProps[`${properties.position}Icon`] = properties.select_icon;
  }
  return (
    <div className={DesignerStyles.designer}>
      <div className={DesignerStyles.separator}></div>
      <div className={DesignerStyles.properties}>
        <h4>Properties</h4>
        <form>
          <div className={DesignerStyles.grouped}>
            <label
              className={`${DesignerStyles.label} ${DesignerStyles.checkbox}`}
            >
              <input
                onChange={handleChange}
                checked={properties.icon}
                type="checkbox"
                name="icon"
              />
              <h5>Icon</h5>
            </label>
            <label
              className={`${DesignerStyles.label} ${DesignerStyles.checkbox}`}
            >
              <input
                onChange={handleChange}
                checked={properties.shadow}
                type="checkbox"
                name="shadow"
              />
              <h5>Shadow</h5>
            </label>
          </div>
          {properties.icon ? (
            <div className={DesignerStyles.grouped}>
              <label className={DesignerStyles.label}>
                <h5>Select an Icon</h5>
                <select
                  name="select_icon"
                  onChange={handleChange}
                  value={properties.select_icon}
                >
                  <option value="local_grocery_store">
                    local_grocery_store
                  </option>
                  <option value="arrow_forward">arrow_forward</option>
                  <option value="arrow_back">arrow_back</option>
                  <option value="add">add</option>
                  <option value="designer_brush">designer_brush</option>
                  <option value="bookmark">bookmark</option>
                </select>
              </label>
              <label className={DesignerStyles.label}>
                <h5>Position</h5>
                <select
                  name="position"
                  onChange={handleChange}
                  value={properties.position}
                >
                  <option>start</option>
                  <option>end</option>
                </select>
              </label>
            </div>
          ) : (
            ""
          )}
          <div className={DesignerStyles.grouped}>
            <label className={DesignerStyles.label}>
              <h5>Color:</h5>
              <select
                name="color"
                value={properties.color}
                onChange={handleChange}
              >
                <option value="default">default</option>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="danger">danger</option>
              </select>
            </label>
            <label className={DesignerStyles.label}>
              <h5>Variant:</h5>
              <select
                name="variant"
                value={properties.variant}
                onChange={handleChange}
              >
                <option value="default">default</option>
                <option value="outlined">outlined</option>
                <option value="text">text</option>
              </select>
            </label>
          </div>
          <label className={DesignerStyles.label}>
            <h5>Text</h5>
            <input
              onChange={handleChange}
              type="text"
              value={properties.text}
              name="text"
            />
          </label>
        </form>
      </div>
      <div className={DesignerStyles.separator}></div>
      <div className={DesignerStyles.result}>
        <h4>Result</h4>
        <div className={DesignerStyles.resultItems}>
          <div className={DesignerStyles.resultBtn}>
            <Button {...fieldProps}>{properties.text}</Button>
          </div>
          <div className={DesignerStyles.codeArea}>
            <small>Code</small>
            <code>{`<Button variant="${properties.variant}" color="${
              properties.color
            }" ${
              properties.icon
                ? `${properties["position"]}Icon="${properties.select_icon}"`
                : ""
            } disableShadow={${!properties.shadow}} >${
              properties.text
            }</Button>`}</code>
          </div>
        </div>
      </div>
      <div className={DesignerStyles.separator}></div>
    </div>
  );
}

export default Designer;
