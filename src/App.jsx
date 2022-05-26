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

import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Bottombar from './component/Bottombar'
import EventInfo from './component/EventInfo';

const App = () => {
  return (
    <div style={{width:390, height: 844, border:'1px solid black', margin: '0 auto'}}>
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
