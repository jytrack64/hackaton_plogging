import useEffect from "react";
import { MapMarker } from "react-kakao-maps-sdk";

function Current(props) {
  return (
    !props.current.isLoading && (
      <MapMarker
        position={props.current.center}
        image={{
          src: "/mylocation2.png",
          size: {
            width: 58,
            height: 85,
          }, // 마커이미지의 크기입니다
          options: {
            offset: {
              x: 27,
              y: 69,
            }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          },
        }}
      >
        {/* <div style={{ padding: "5px", color: "#000" }}>
          {props.current.errMsg ? props.current.errMsg : "당신의 위치"}
        </div> */}
        {/* 현재 위치 마커  */}
      </MapMarker>
    )
  );
}
export default Current;
