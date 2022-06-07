import React,{useEffect} from 'react'
import KakaoMapScript from "../KakaoMapScript";


function Running() {
  useEffect(() => {
    KakaoMapScript();
}, []);


  return (
    <div id='myMap' style={{
      width: '100vw',
      height: '100vh'
  }}></div>
  )

}

export default Running;
