import React,{ useState } from 'react'
import { Map } from "react-kakao-maps-sdk";
import TrashMarker from './TrashMarker';

function Running() {
  const [flag, setFlag] = useState(true);

  return (
    <>
      <button onClick={() => {setFlag(!flag)}}>마커</button>
      <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.49632346686845,
        lng: 127.02934323385911,
      }}
      style={{
        // 지도의 크기
        width: "100vw",
        height: "100vh",
      }}
      level={3} // 지도의 확대 레벨
      >
      <TrashMarker flag={flag} />

      </Map>
    </>
  )

}

export default Running;
