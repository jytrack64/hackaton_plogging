import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
 import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Bottombar from "./component/Bottombar";
import EventInfo from "./component/EventInfo";


function App() {
    return (
      <div>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<EventInfo/>}/>
            </Routes>
          </BrowserRouter>
          <Bottombar/>
      </div>
    )
  }
  export default App;