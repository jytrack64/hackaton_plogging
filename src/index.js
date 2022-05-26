import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Bottombar from "./component/Bottombar";
import EventInfo from "./component/EventInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
