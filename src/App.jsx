import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
 import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
  import EventInfo from "./component/EventInfo";
import Profile from "./component/Profile";
import Writing from "./component/Writing"
import Comment from "./component/Writing"
 

 
const App = () => {
  return (
    <div style={{width:390, height: 844, border:'1px solid black', margin: '0 auto'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EventInfo/>}/>
        </Routes>
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/writing" element={<Writing/>}/>
          <Route path="/comment" element={<Comment/>}/>
          <Route path="*" element={ <div>없는페이지입니다</div> } />
  
        </Routes>
        </BrowserRouter>
     </div>
  )

}
export default App;
