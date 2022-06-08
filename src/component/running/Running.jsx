
import React,{ useState } from 'react'
import { Map } from "react-kakao-maps-sdk";
import '../../css/Running.css';
import {Container,Row,Col} from 'react-bootstrap'
import TrashMarker from './TrashMarker';

function Running() {
  const [flag, setFlag] = useState(true);

  return (
    <>
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
        zIndex: '1'
      }}
      level={3} // 지도의 확대 레벨
      >
      <TrashMarker flag={flag}/>
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
          <div className='running_topBar_trashCan' onClick={() => {setFlag(!flag)}}>

          </div>
        </div>
        <div className='running_bottomBar_add'>

        </div>
        <div className='running_bottomBar'>
          <div className='running_bottomBar_first'>
 
          </div>
          <div className='running_bottomBar_second'>

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
    </>
  );
}

export default Running;
