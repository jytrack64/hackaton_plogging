import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Bottombar from './component/Bottombar'
import Main from './component/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Festival from './component/Festival';

export default function App() {
  return (
    <div style={{width: '390px',height:'844px',border:'1px solid red',margin:'0 auto'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/main' element={<Main/>}/>
          <Route path='/' element={<Festival/>}/>
        </Routes>
      </BrowserRouter>
      <Bottombar/>
    </div>
  )
}
