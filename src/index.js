import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/Main";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt, faChartPie } from "@fortawesome/free-solid-svg-icons";

library.add(faListAlt, faChartPie);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
