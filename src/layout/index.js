import Nav from "./Nav";
import { withRouter } from "react-router-dom";
function Layout(props) {
  const { history, location } = props;
  return (
    <main>
      <section>
        <Nav history={history} location={location}></Nav>
      </section>
      <section>{props.children}</section>
    </main>
  );
}

export default withRouter(Layout);
