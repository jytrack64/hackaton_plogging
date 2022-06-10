
import React, { useState, useCallback, useRef, useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";
import RunningCourse from "./RunningCourse";
import Current from "./Current";
import '../../css/Running.css';
import {Container,Row,Col} from 'react-bootstrap'
import TrashMarker from './TrashMarker';
import { useNavigate } from "react-router-dom";

function Running() {
  const navigate = useNavigate();
  // 쓰레기통 마커 숨기기, 보이기
  const [flag, setFlag] = useState(true);

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
    <div className="running_container">
      <Map // 지도를 표시할 Container
        // 지도의 중심좌표
        center={current.center}
      style={{
        // 지도의 크기
        width: "100vw",
        height: "100vh",
        zIndex: '1'
      }}
      level={3} // 지도의 확대 레벨
      onClick={start == true ? handleClick : null}
      onRightClick={start == true ? handleRightClick : null}
      onMouseMove={start == true ? handleMouseMove : null}
      >
      <TrashMarker flag={flag}/>
   {/* {start == true ? (
          <button onClick={start == true ? handleClick : null}>기록하기</button>
        ) : null} */}
     
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

      </Map>
          <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
      <div className='running'>
        <div className='running_topBar'>
          <div className='running_topBar_searchBar'>
            <div className='running_topBar_searchBar_Img'></div>
            <span className='running_topBar_searchBar_text'>ㅤ도착 위치 검색</span>
          <div className='running_topBar_searchBar_empty'></div>
          </div>
          <div className='running_topBar_empty'>

          </div>
          <div
            className='running_topBar_trashCan'
            onClick={() => setFlag(!flag)}
            style={
              flag
              ? {filter: "brightness(70%)"}
              : {filter: "brightness(100%)"}
            }
          >
          </div>
        </div>
        <div className='running_bottomBar_add' onClick={() =>
            setCurrent({
              center: {
                lat: current.center.lat + 0.000000000001,
                lng: current.center.lng + 0.000000000001,
              },
              isPanto: true,
            })
          }>

        </div>
        <div className='running_bottomBar'>
          <div className='running_bottomBar_first'>
 
          </div>
          <div className='running_bottomBar_second' onClick={() => {
            setStart(true);
          }} >

          </div>
          <div className='running_bottomBar_third'>
            <div className='endPoint'>

            </div>
          </div>
        </div>
      </div>
      </Col>
      </Row>
      </Container>
    </div>

    <div className="showOnPc_container">
      <div className="showOnPc_img">
        <img src="/pc_img.png" />
      </div>
      <div className="showOnPc_content">
        <span><span style={{color: "#49e594"}}>JubGo</span>는 모바일에 최적화되어 있습니다</span>
        <br/>
        <span><span style={{color: "#49e594"}}>모바일</span>로 접속해 주세요 🙂</span>
      </div>
      <div
        className="showOnPc_btn"
        onClick={() => {navigate('/')}}
      >Home</div>
    </div>
    </>
  );
}

export default Running;
