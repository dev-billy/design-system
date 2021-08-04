import Nav from "./Nav";
import LayoutStyles from "../styles/layout.module.scss";
import { withRouter } from "react-router-dom";
function Layout(props) {
  const { history, location } = props;
  return (
    <main className={LayoutStyles.main}>
      <section className={LayoutStyles.nav}>
        <Nav history={history} location={location}></Nav>
      </section>
      <section className={LayoutStyles.content}>{props.children}</section>
    </main>
  );
}

export default withRouter(Layout);
