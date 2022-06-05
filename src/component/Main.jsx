import React,{useRef,useEffect} from 'react'
import {Container} from 'react-bootstrap'
import '../css/Main.css'

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
