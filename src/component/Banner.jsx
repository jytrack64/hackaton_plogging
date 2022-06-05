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
    <Carousel
      style={{ width: "100%", height: "auto", marginBottom: 20}}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item
        onClick={() => {}}
        style={{ width: "100%", height: "auto" }}
      >
        <img
          style={{ height: "200px" }}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStG9pg_tYgirwkUvWthAM4kg1bMonGtmfzdQ&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 onClick={() => {
            navigate("info/0")
          }} style={{ fontFamily: "GmarketSansBold", fontStyle: "italic", fontSize:"25px", fontWeight:"600", color: "white" }}>재활용 쓰레기 올바른 분리배출 방법</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: "100%", height: "auto" }}>
        <img
          style={{ height: "200px" }}
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/biodegradable-paper-eco-straws-zero-waste-yellow-background-top-view-copy-space-text-222877205.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3  onClick={() => {
            navigate("info/1")
          }} style={{ fontFamily: "GmarketSansBold", fontStyle: "italic", fontSize:"30px", color: "white" }}>제로 웨이스트 하기</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: "100%", height: "auto" }}>
        <img
          style={{ height: "200px" }}
          className="d-block w-100"
          src="https://see.news/wp-content/uploads/2020/07/Ocean-plastic-waste-Large.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3  onClick={() => {
            navigate("info/2")
          }} style={{ fontFamily: "GmarketSansBold", fontStyle: "italic", fontSize:"25px", fontWeight:"900", color: "white" }}>생활 속 쓰레기 줄이기</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;