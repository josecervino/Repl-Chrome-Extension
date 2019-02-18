import "../css/popup.css";
import React from "react";
import App from "./popup/options.jsx";
import { render } from "react-dom";

render(
  <App/>,
  window.document.getElementById("app")
);
