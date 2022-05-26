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
