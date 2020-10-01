import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import history from "../history";
import Events from "../pages/Events/Events";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import SearchHistory from "../pages/SearchHistory/SearchHistory";

const AppRouter = () => {
  return (
    <div>
      <Router history={history}>
        <div className="container container__dark no-scroll-bars">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:artist/events" component={Events} />
            <Route path="/searchHistory" component={SearchHistory} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
