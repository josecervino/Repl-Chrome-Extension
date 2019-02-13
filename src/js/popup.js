import "../css/popup.css";
import Options from "./popup/options.jsx";
import React from "react";
import { render } from "react-dom";

render(
  <Options/>,
  window.document.getElementById("app-container")
);
