import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import * as React from 'react';
import { About } from "./About/About";
import { Works } from "./Works/Works";
import { Home } from "./Home/Home";
import { getCommonStyles } from "./Common/common.styles";

export const App= ()=> {
  const styles = getCommonStyles();
  return (
    <Router>
      <div style={styles.container}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}