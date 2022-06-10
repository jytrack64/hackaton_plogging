import React, { useState, useCallback, useRef, useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";
import RunningCourse from "./RunningCourse";
import Current from "./Current";
import '../../css/Running.css';
import {Container,Row,Col} from 'react-bootstrap'
import TrashMarker from './TrashMarker';
import cameraBtn from '../../image/cameraBtn.png';
import routeSettingBtn from '../../image/routeSettingBtn.png';
import pauseBtn from '../../image/pauseBtn.png';
import endBtn from '../../image/endBtn.png';
import endPointBrn from '../../image/endPointBtn.png';
import resumeBtn from '../../image/resumeBtn.png';
import startBtn from '../../image/startBtn.png';
import useInterval from "./useInterval";
import EndpointMarker from "./EndpointMarker";



function Running() {
  const [flag, setFlag] = useState(true);

  // 경로추적 기능 스위치
  const [start, setStart] = useState(null);

  // 일시정지 시
  const [pause,setPause] = useState(null);


  // 플로깅 한 시간
  const [plogsec, setPlogsec] = useState(0);
  const [plogmin, setPlogmin] = useState(0);
  const [ploghour,setPloghour] =useState(0);

  //주운 쓰레기 수
  const [picktrash, setPicktrash] = useState(0);

  const [endpoint,setEndpoint] = useState(null);

  const [endposition, setEndposition] = useState();

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

  const [leftButton, setLeftButton] = useState(0);

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

  const endpointClick = (_map, mouseEvent)=>{
    if(endpoint)
      setEndposition({
        lat: mouseEvent.latLng.getLat(),
        lng: mouseEvent.latLng.getLng(),
      })
  }

  const handleMouseMove = (_map, mouseEvent) => {
    setMousePosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
  };
  const handleRightClick = (_map, _mouseEvent) => {
    setIsdrawing(false);
  };

  const cameraClick =()=> {
    setTimeout(()=>{
      setPicktrash(picktrash+1);
    },1000)
  }

  const LeftButton = () => {
    return (
      <>
        <div className="left_button">
          <div className="left_button_path">
            <div className="left_button_path_text">경로</div>
          </div>
          <div className="left_button_container">
            <div className="left_button_detail">
              <div className="left_button_detail_icon_container">
                <div className="left_button_detail_icon">
                  <img
                    className="left_button_detail_icon_image"
                    src="/path.png"
                  />
                </div>
                <div className="left_button_detail_text">저장된 경로</div>
              </div>
              <div className="left_button_detail_button">
                <img
                  className="left_button_detail_button_image"
                  src="/pathbutton.png"
                />
              </div>
            </div>
            <div className="left_button_detail">
              <div className="left_button_detail_icon_container">
                <div className="left_button_detail_icon">
                  <img
                    className="left_button_detail_icon_image"
                    src="/star.png"
                  />
                </div>
                <div className="left_button_detail_text">별표 표시한 구간</div>
              </div>
              <div className="left_button_detail_button">
                <img
                  className="left_button_detail_button_image"
                  src="/pathbutton.png"
                />
              </div>
            </div>
            <div className="left_button_detail">
              <div className="left_button_detail_icon_container">
                <div className="left_button_detail_icon">
                  <img
                    className="left_button_detail_icon_image"
                    src="/history.png"
                  />
                </div>
                <div className="left_button_detail_text">코스기록</div>
              </div>
              <div className="left_button_detail_button">
                <img
                  className="left_button_detail_button_image"
                  src="/pathbutton.png"
                />
              </div>
            </div>
            <div className="left_button_detail">
              <div className="left_button_detail_icon_container">
                <div className="left_button_detail_icon">
                  <img
                    className="left_button_detail_icon_image"
                    src="/trophy.png"
                  />
                </div>
                <div className="left_button_detail_text">지역순위</div>
              </div>
              <div className="left_button_detail_button">
                <img
                  className="left_button_detail_button_image"
                  src="/pathbutton.png"
                />
               </div>
            </div>
          </div>
        </div>
     </>
   );
  }




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

  useEffect(()=>{
    if(start==false)
    {
      setPlogsec(0);
      setPlogmin(0);
      setPloghour(0);
      setPicktrash(0);
      setEndposition(false);
    }
  },[start])
  
  useInterval(()=>{
      setPlogsec(plogsec+1);

      if(plogsec>58)
      {
        setPlogsec(0);
        setPlogmin(plogmin+1)
      }

      if(plogmin>59)
      {
        setPlogmin(0);
        setPloghour(ploghour+1)
      }
  }, pause ? null : 1000)






  return (

    <div className='running'>
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
        onClick={start == true ? handleClick : endpointClick}
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
        {leftButton == 1 ? <LeftButton /> : null}
        {endposition && <EndpointMarker endposition={endposition} />}
      </Map>

       <div className="running_topBarBox">
          <div className='running_topBar'>
            <div className='running_topBar_searchBar'>
              {start 
              ?  <div className="running_topBar_startRunning"> 
                  <div className="plogtime"> {ploghour ? `${ploghour} : ` : null}{plogmin<10 ? 0 : null}{plogmin} : {plogsec<10 ? 0 : null}{plogsec}</div> 
                  <div className="picktrash">주운 쓰레기 {picktrash}</div>
                </div>
              : <><div className='running_topBar_searchBar_Img'></div>
              <span className='running_topBar_searchBar_text'><span style={{fontSize:"10px"}}>ㅤ</span>도착 위치 검색</span>
              <div className='running_topBar_searchBar_empty'></div></>}
              
            
            </div>
            <div className='running_topBar_empty'>

            </div>
            <div className='running_topBar_trashCan' onClick={() => {setFlag(!flag)}}>

            </div>
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
      
        <div className="running_bottomBarBox">
          <div className='running_bottomBar'>
            <label for='camera' className='running_bottomBar_first'
            style={
              start 
              ? {backgroundImage : `url(${cameraBtn})`}
              : {backgroundImage : `url(${routeSettingBtn})`} 
            }
            onClick={()=>setLeftButton((prev) => !prev)}
           
            >
                {start 
                ? <input 
                    onClick={cameraClick} 
                    type="file" style={{display:'none'}} 
                    id="camera" 
                    capture="camera" 
                    accept="image/*" />
                : null}
            </label>
            <div className='running_bottomBar_second' onClick={() => {
              start ? (pause ? setPause(false) : setPause(true)) : setStart(true)
            }} 
            style={
              start 
              ? ( pause ? {backgroundImage : `url(${resumeBtn})`} : {backgroundImage : `url(${pauseBtn})`})
              : {backgroundImage : `url(${startBtn})`} 
            }
            >

            </div>
            <div className={endpoint ? 'running_bottomBar_third endpoint' : 'running_bottomBar_third'}
            style={
              start 
              ? {backgroundImage : `url(${endBtn})`}
              : {backgroundImage : `url(${endPointBrn})`}
            
            }
            onClick={() => {
              {start ? setStart(false) : setEndpoint(true)}
              {endpoint ? setEndpoint(false) : setPause(false)}
            }} 
            
            >

            </div>
          </div>
        </div>
      </div>
  );
};

export default Running;
