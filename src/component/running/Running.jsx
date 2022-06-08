import React, { useState, useCallback, useRef, useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";
import RunningCourse from "./RunningCourse";
import Current from "./Current";

function Running() {
  // 경로추적 기능 스위치
  const [start, setStart] = useState(null);

  // 경로추적에 필요한 state들
  const [moveLine, setMoveLine] = useState();
  const [isdrawing, setIsdrawing] = useState(false);
  const [distances, setDistances] = useState([]);
  const [paths, setPaths] = useState([]);
  const [clickLine, setClickLine] = useState();
  const [mousePosition, setMousePosition] = useState({
    lat: 0,
    lng: 0,
  });

  // 내위치에 필요한 state
  const [current, setCurrent] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  //경로추적 핸들러
  const handleClick = (_map, mouseEvent) => {
    if (!isdrawing) {
      setDistances([]);
      setPaths([]);
    }
    setPaths((prev) => [
      ...prev,
      {
        lat: mouseEvent.latLng.getLat(),
        lng: mouseEvent.latLng.getLng(),
      },
    ]);
    console.log(paths);
    setDistances((prev) => [
      ...prev,
      Math.round(clickLine.getLength() + moveLine.getLength()),
    ]);
    setIsdrawing(true);
  };
  const handleMouseMove = (_map, mouseEvent) => {
    setMousePosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
  };
  const handleRightClick = (_map, _mouseEvent) => {
    setIsdrawing(false);
  };

  // 내 위치 불러오기
  useEffect(() => {
    // 현재 위치 찾기 조건문
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrent((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setCurrent((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setCurrent((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  return (
    <>
      <Map // 지도를 표시할 Container
        center={current.center}
        style={{
          // 지도의 크기
          width: "100vw",
          height: "100vh",
        }}
        level={3} // 지도의 확대 레벨
        onClick={start == true ? handleClick : null}
        onRightClick={start == true ? handleRightClick : null}
        onMouseMove={start == true ? handleMouseMove : null}
      >
        {/* {start == true ? (
          <button onClick={start == true ? handleClick : null}>기록하기</button>
        ) : null} */}
        <button
          onClick={() => {
            setStart(true);
          }}
        >
          시작
        </button>
        {start == true ? (
          <RunningCourse
            moveLine={moveLine}
            setMoveLine={setMoveLine}
            isdrawing={isdrawing}
            setIsdrawing={setIsdrawing}
            distances={distances}
            setDistances={setDistances}
            paths={paths}
            setPaths={setPaths}
            clickLine={clickLine}
            setClickLine={setClickLine}
            mousePosition={mousePosition}
            setMousePosition={setMousePosition}
          />
        ) : null}

        <Current current={current} setCurrent={setCurrent} />
        <button
          onClick={() =>
            setCurrent({
              center: {
                lat: current.center.lat + 0.000000000001,
                lng: current.center.lng + 0.000000000001,
              },
              isPanto: true,
            })
          }
          style={{
            background: "white",
            padding: "30px",
            position: "absolute",
            zIndex: "1",
          }}
        >
          내 위치
        </button>
      </Map>
    </>
  );
}

export default Running;
