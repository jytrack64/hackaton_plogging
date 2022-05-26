import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Bottombar from './component/Bottombar'
import EventInfo from './component/EventInfo';
import Main from './component/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div style={{width: '390px',height:'844px',border:'1px solid red',margin:'0 auto'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/main' element={<Main/>}/>
          <Route path='/' element={<EventInfo/>}/>
        </Routes>
      </BrowserRouter>
      <Bottombar/>
    </div>
  )
}
