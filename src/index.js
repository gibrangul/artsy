import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.js";
import configureStore from "./store/configureStore";

const store = configureStore();
// window.localStorage.removeItem("searchHistory");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
