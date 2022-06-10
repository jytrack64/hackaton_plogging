import React,{useRef,useEffect,useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../../css/Main.css'
import MainSlider from '../slider/MainSlider'

import {gsap} from 'gsap'
import { useNavigate } from 'react-router-dom'
import FestivalCard from '../festival/FestivalCard'
import Carousel from 'react-bootstrap/Carousel'



function Main(props) {
  let headlineText = useRef(null);
  let startButton = useRef(null);
  let eventButton = useRef(null);

  const navigate = useNavigate();

  const [post, setPost] = useState([]);

  const FilterCard = () => {
    return props.data;
  }

  useEffect(()=> {
    setPost([...FilterCard()]);
  },[props.category])

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
  
  function handleStartClick(){
    navigate('/running');
  }
  function handleEventClick(){
    navigate('/event');
  }



  return (
     
    <div>
    
 
    
    <div className='main'>       
      <MainSlider/>
      <div className='mainBox'>
      <div className='mainInfo_text'>
        <span>저희 줍고는 <span style={{color:'#49e594',fontWeight:'bold'}}>플로깅 사용자</span>를 위한 서비스에요
          <br style={{border:"1px solid black"}}/><br/>
          초보자들을 위한 <span style={{fontWeight:'bold'}}>안내</span>부터<br/>
          각종 <span style={{fontWeight:'bold'}}>행사정보</span>는 물론이고 <br/>
          플로깅을 위한 <span style={{fontWeight:'bold'}}>경로 설정</span>까지 <br/>
          <br/>
          <span style={{fontWeight:'bold'}}>전부 도와드릴게요 😊</span></span>

      </div>

      </div>
      <div style={{border:"2px solid rgba(0,0,0,0.3)", width:"80%"}}/><div/>

    <div className='mainBox' style={{height:'325px'}}>
      <div className='headline1'>
        <h3 className='headline_text'>
          <span style={{color:'#49e594'}}>참여</span>가능한<br/>
          <span style={{color:'#49e594'}}>플로깅행사</span>
        </h3>
      </div>
    </div>

     
      <div className='main_festivalInfo' lg={12} >
      {post.map((item, i) => i==0 ? <div style={{width:'500px',height:'430px'}}><FestivalCard data={item}  i={i} key={item.id} /></div> : null)}
      </div>

      <div className='eventButton' 
      onClick={handleEventClick}
      ref={el=>{eventButton=el}}>
               <span className='eventButtonText'>더보러가기</span> 
 
      </div>
      <div style={{border:"2px solid rgba(0,0,0,0.3)", width:"80%"}}/><div/>


    
        <div className='headline2'>
          <h3 className='headline_text'
              ref={el=>{headlineText=el}}
          ><span style={{color:'#49e594'}}>지구</span>와함께<br/>
          <span style={{color:'#49e594'}}>건강해지기</span>
          </h3>
        </div>
      <div className='startButton'
        onClick={handleStartClick}
        ref={el=>{startButton=el}}>
               <span className='startButtonText'>달리러가기</span> 

      </div>
      </div>

      </div>
  )
}

export default Main;
