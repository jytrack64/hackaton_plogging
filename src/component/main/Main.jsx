import React,{useRef,useEffect} from 'react'
import {Container} from 'react-bootstrap'
import '../../css/Main.css'
import MainSlider from '../slider/MainSlider'

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
    <div className='main'>
      <MainSlider/>
      <div className='mainInfo_text'>
        <span>저희 줍고는 <span style={{color:'#49e594',fontWeight:'bold'}}>플로깅 사용자</span>를 위한 서비스에요
          <br/><br/>
          초보자들을 위한 <span style={{fontWeight:'bold'}}>안내</span>부터<br/>
          각종 <span style={{fontWeight:'bold'}}>행사정보</span>는 물론이고 <br/>
          플로깅을 위한 <span style={{fontWeight:'bold'}}>경로 설정</span>까지 <br/>
          <br/>
          <span style={{fontWeight:'bold'}}>전부 도와드릴게요 😊</span></span>
      </div>
      <div className='headline'>
        <h3 className='headline_text'>
        <span style={{color:'#49e594'}}>참여</span>가능한<br/>
        <span style={{color:'#49e594'}}>플로깅행사</span>
          </h3>
          </div>
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
  )
}

export default Main;
