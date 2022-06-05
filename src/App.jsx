import React from 'react'
import ReactDOM from "react-dom/client";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Menubar from './component/Menubar'
import Main from './component/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Festival from './component/Festival';
import Profile from './component/Profile';
import Running from './component/Running';
import Writing from "./component/Writing"
import Comment from "./component/Writing"
import "./index.css";

export default function App() {

 

 
const App = () => {
  return (
    <>
    <Menubar/>
    <div style={{width: '390px',height:'789px',border:'1px solid red',margin:'0 auto'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/main' element={<Main/>}/>
          <Route path='/' element={<Festival/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/writing" element={<Writing/>}/>
          <Route path='/running' element={<Running/>}/>
          <Route path="/comment" element={<Comment/>}/>
          <Route path="*" element={ <div>없는페이지입니다</div> } />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}
}
