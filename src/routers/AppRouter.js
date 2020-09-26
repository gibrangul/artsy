import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Home from "../pages/Home/Home";

const AppRouter = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
