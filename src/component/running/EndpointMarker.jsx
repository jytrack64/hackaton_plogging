import { Map, MapMarker } from "react-kakao-maps-sdk";
import React,{useState} from 'react'

function EndpointMarker(props) {
  const [position, setPosition] = useState([]);

  return (
    <div>
          <MapMarker
            key={`${position.id}`}
            position={props.endposition} // 마커를 표시할 위치
            image={{
              src: "/endpointImg.png", // 마커이미지의 주소
              size: {
                width: 35,
                height: 35
              }, // 마커이미지의 크기
            }}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
          />
    </div>
  )
}

export default EndpointMarker