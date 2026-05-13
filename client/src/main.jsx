import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import appStore from "./utils/store";
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider  store={appStore}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
