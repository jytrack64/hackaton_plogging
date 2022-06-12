import React from 'react'
import {Carousel} from 'react-bootstrap'
import mainSlider1 from '../../image/mainslider2Img1.png'
import mainSlider2 from '../../image/mainslider2Img2.png'
import mainSlider3 from '../../image/mainslider2Img3.png'
import mainSlider4 from '../../image/mainslider2Img4.png'
import '../../css/Main.css'



function MainSlider2() {
  return (
    <Carousel className="sliderImg">
    <Carousel.Item className="sliderBox">
      <img
        className="d-block w-100"
        src={mainSlider1}
        alt="First slide"
      />
      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="sliderBox">
      <img
        className="d-block w-100"
        src={mainSlider2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="sliderBox">
      <img
        className="d-block w-100"
        src={mainSlider3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="sliderBox">
      <img
        className="d-block w-100"
        src={mainSlider4}
        alt="Fourth slide"
      />
  
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default MainSlider2