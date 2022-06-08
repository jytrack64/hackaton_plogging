import React,{ useState, useEffect } from 'react'
import { Map, MapMarker } from "react-kakao-maps-sdk";
import trash from "./trash.json"
const { kakao } = window;

// 주소 -> 좌표 변환 서비스 객체 생성
var geocoder = new kakao.maps.services.Geocoder();

export default function TrashMarker(props) {
  const [trashData, setTrashData] = useState(trash);
  const [positions, setPositions] = useState([]);
  
  useEffect(() => {
    trashData.map((obj) => {
      return geocoder.addressSearch(obj.address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          let objData = {
            id: obj.id,
            title : result[0].address_name,
            latlng : {
              lat : result[0].y,
              lng : result[0].x
            }
          };
          setPositions((prev) => [...prev, objData]);
        }
      }, {})
    })
  }, [trashData])

  return (
    <div>
      
      {props.flag && positions.map((position, index) => {
        return(
          <MapMarker
            key={`${position.id}`}
            position={position.latlng} // 마커를 표시할 위치
            image={{
              src: "/trashmarker.png", // 마커이미지의 주소
              size: {
                width: 30,
                height: 30
              }, // 마커이미지의 크기
            }}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
          />
      )})}
    </div>
  )
}
