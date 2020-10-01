import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import configureStore from "./store/configureStore";

export default ({ children, initialState = {} }) => {
  const store = configureStore(initialState);
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};
