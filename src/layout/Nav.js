import navList from "./navlist";
import LayoutStyles from "../styles/layout.module.scss";

function Nav(props) {
  const { history, location } = props;
  const NavList = navList(location, history);
  return (
    <nav>
      <h2 className={LayoutStyles.logo}>
        {"{"}
        <span className={LayoutStyles["logo-span"]}>Dev</span>Billy{"}"}
      </h2>
      <ul className={LayoutStyles.items}>
        {NavList.map((item, index) => (
          <li
            onClick={item.onClick}
            key={index}
            className={
              item.active
                ? `${LayoutStyles.item} ${LayoutStyles["item_active"]}`
                : `${LayoutStyles.item} ${LayoutStyles["item_inactive"]}`
            }
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
