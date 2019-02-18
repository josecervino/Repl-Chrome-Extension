import "../css/popup.css";
import React from "react";
import Options from "./popup/options.jsx";
import { render } from "react-dom";

render(
  <Options/>,
  window.document.getElementById("app")
);
