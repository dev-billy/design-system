import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";
function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
