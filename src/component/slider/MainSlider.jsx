import React from 'react'
import {Carousel} from 'react-bootstrap'
import mainSlider1 from '../../image/mainSlider1.png'
import mainSlider2 from '../../image/mainSlider2.png'
import mainSlider3 from '../../image/mainSlider3.png'



function MainSlider() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={mainSlider1}
        alt="First slide"
      />
      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={mainSlider2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={mainSlider3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default MainSlider