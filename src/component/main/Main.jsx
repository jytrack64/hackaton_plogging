import React,{useRef,useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../../css/Main.css'
import { GoogleMap } from '@react-google-maps/api'
import Map from './Location.js'

import {gsap} from 'gsap'
import { useNavigate } from 'react-router-dom'




function Main() {
  let headlineText = useRef(null);
  let startButton = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    gsap.to(
      headlineText,
      .8,{
      opacity: 1,
      y: -30,
      ease: 'Power3.out',
      delay: .2
      }
    )
    gsap.to(
      startButton,
      .8,{
      opacity: 1,
      y: -30,
      ease: 'Power3.out',
      delay: .9
      }
    )
  }, [])
  
  function handleClick(){
    navigate('/running');
  }



  return (
   <Container>
    <Row>
       <Col xs={12} lg={6}>
      {/* <Location/> */}
      <div className='main'>
 
        <div className='headline'>
          <h3 className='headline_text'
              ref={el=>{headlineText=el}}
          ><span style={{color:'#49e594'}}>지구</span>와함께<br/>
          <span style={{color:'#49e594'}}>건강해지기</span>
          </h3>
        </div>
        <div className='startButton' 
        onClick={handleClick}
        ref={el=>{startButton=el}}
        >
      </div>
      </div>
      </Col>
      <Col xs={12} lg={6}>
      <div className='main main2'>
        <div className='headline'>
          <h3 className='headline_text'
              ref={el=>{headlineText=el}}
          ><span style={{color:'#49e594'}}>지구</span>와함께<br/>
          <span style={{color:'#49e594'}}>건강해지기</span>
          </h3>
        </div>
        <div className='startButton' 
        onClick={handleClick}
        ref={el=>{startButton=el}}
        >
      </div>
      </div>
        {/* 데스크탑용 화면 구현 */}
      </Col>
      </Row> 
    </Container> 
 

    
  )
}

export default Main;
