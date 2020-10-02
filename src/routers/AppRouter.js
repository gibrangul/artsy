import React, { useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/Header/Header";
import history from "../history";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Events from "../pages/Events/Events";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import SearchHistory from "../pages/SearchHistory/SearchHistory";

const AppRouter = () => {
  const defaultTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(defaultTheme);
  const changeTheme = (val) => {
    setTheme(val);
    localStorage.setItem("theme", val);
  };
  return (
    <div>
      <Router history={history}>
        <div className={`container container__${theme} no-scroll-bars`}>
          <Header theme={theme} setTheme={changeTheme} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:artist/events" component={Events} />
            <Route path="/searchHistory" component={SearchHistory} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
