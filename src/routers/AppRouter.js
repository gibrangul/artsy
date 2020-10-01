import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import history from "../history";
import Events from "../pages/Events/Events";
import Home from "../pages/Home/Home";

const AppRouter = () => {
  return (
    <div>
      <Router history={history}>
        <div className="container container__dark no-scroll-bars">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:artist/events" component={Events} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
