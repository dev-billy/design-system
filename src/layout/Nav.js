import navList from "./navlist";

// const navStyles = {

// }

function Nav(props) {
  const { history, location } = props;
  const NavList = navList(location, history);
  return (
    <nav>
      <ul>
        {NavList.map((item, index) => (
          <li onClick={item.onClick} key={index}>
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
