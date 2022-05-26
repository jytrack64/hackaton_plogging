import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bottombar from "./component/Bottombar";
import EventInfo from "./component/EventInfo";
import Festival from "./component/Festival";

function App() {
  return (
    <div
      className="container"
      style={{
        border: "1px",
        borderStyle: "solid",
        borderColor: "red",
        width: "390px",
        height: "844px",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EventInfo />} />
        </Routes>
      </BrowserRouter>
      <Festival />
      <Bottombar />
    </div>
  );
}

export default App;
