import React, { useState } from "react";
import { Polyline, CustomOverlayMap } from "react-kakao-maps-sdk";

// start 누르면 자동으로 마우스 클릭하기
// 10초마다 마우스 클릭하기

function RunningCourse(props) {
  const DistanceInfo = ({ distance }) => {
    const walkkTime = (distance / 67) | 0;
    const bycicleTime = (distance / 227) | 0;

    return (
      <ul className="dotOverlay distanceInfo">
        <li>
          <span className="label">총거리</span>{" "}
          <span className="number">{distance}</span>m
        </li>
        <li>
          <span className="label">도보</span>{" "}
          {walkkTime > 60 && (
            <>
              <span className="number">{Math.floor(walkkTime / 60)}</span> 시간{" "}
            </>
          )}
          <span className="number">{walkkTime % 60}</span> 분
        </li>
        <li>
          <span className="label">자전거</span>{" "}
          {bycicleTime > 60 && (
            <>
              <span className="number">{Math.floor(bycicleTime / 60)}</span>{" "}
              시간{" "}
            </>
          )}
          <span className="number">{bycicleTime % 60}</span> 분
        </li>
      </ul>
    );
  };

  return (
    <>
      <Polyline
        path={props.paths}
        strokeWeight={10} // 선의 두께입니다
        strokeColor={"#db4040"} // 선의 색깔입니다
        strokeOpacity={1} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
        onCreate={props.setClickLine}
      />
      {props.paths.map((path) => (
        <CustomOverlayMap
          key={`dot-${path.lat},${path.lng}`}
          position={path}
          zIndex={1}
        >
          <span className="dot"></span>
        </CustomOverlayMap>
      ))}
      {props.paths.length > 1 &&
        props.distances
          .slice(1, props.distances.length)
          .map((distance, index) => (
            <CustomOverlayMap
              key={`distance-${props.paths[index + 1].lat},${
                props.paths[index + 1].lng
              }`}
              position={props.paths[index + 1]}
              yAnchor={1}
              zIndex={2}
            >
              {!props.isdrawing && props.distances.length === index + 2 ? (
                <DistanceInfo distance={props.distance} />
              ) : (
                <div className="dotOverlay">
                  거리 <span className="number">{props.distance}</span>m
                </div>
              )}
            </CustomOverlayMap>
          ))}
      <Polyline
        path={
          props.isdrawing
            ? [props.paths[props.paths.length - 1], props.mousePosition]
            : []
        }
        strokeWeight={10} // 선의 두께입니다
        strokeColor={"#db4040"} // 선의 색깔입니다
        strokeOpacity={1} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
        onCreate={props.setMoveLine}
      />
      {props.isdrawing && (
        <CustomOverlayMap position={props.mousePosition} yAnchor={1} zIndex={2}>
          <div className="dotOverlay distanceInfo">
            총거리{" "}
            <span className="number">
              {Math.round(
                props.clickLine.getLength() + props.moveLine.getLength()
              )}
            </span>
            m
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
}

export default RunningCourse;
