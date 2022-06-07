import React from 'react'
import {Carousel}  from 'react-bootstrap';
import { useState } from 'react'
import { useNavigate } from 'react-router';
 
function Banner() {

  let navigate = useNavigate();
 
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="slider"
      
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item
        onClick={() => {}}
        style={{ width: "100%", height: "auto" }}
      >
        <img
           className="d-block w-100"
          src="https://www.youth.go.kr/youth/cmm/imgView/imgView.do?atchmnflId=00000000000006827119"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 onClick={() => {
            navigate("info/0")
          }}  >제로 웨이스트 하기</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: "100%", height: "auto" }}>
        <img
          
          className="d-block w-100"
          src="https://tcocertified.com/wp-content/uploads/2019/10/international-e-waste-day.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3  onClick={() => {
            navigate("info/1")
          }}  >올바른 재활용 쓰레기 배출 방법</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: "100%", height: "auto" }}>
        <img
     
          className="d-block w-100"
          src="https://i.ytimg.com/vi/f3mcjmKcGeo/maxresdefault.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3  onClick={() => {
            navigate("info/2")
          }}  >생활 속 쓰레기 줄이기</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
// test

export default Banner;