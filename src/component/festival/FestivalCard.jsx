/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../../css/FestivalCard.css'

export default function FestivalCard({ data }) {
  const [flag, setFlag] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => {
    setFlag(!flag);
  }

  return (
    <Col className="cardGrid" md={6} lg={3}>
      <Card className="cardContainer">
        <Card.Img variant="top" className="cardImg" src={`${data.image}`}
          onError={(e) => e.target.src="/noimage.png"}
          onClick={() => {navigate(`/detail/${data.id - 1}`);}}
          style={{cursor: "pointer"}}
        />
        <Card.Body>
          <Card.Title className="cardTitle" 
            onClick={() => {
              navigate(`/detail/${data.id - 1}`);
            }}
            style={{fontFamily: "SCDream7", cursor: "pointer"}}
          >
            {data.title}
          </Card.Title>
          <Card.Subtitle className="cardDate" style={{fontFamily: "SCDream4"}}>{data.date}</Card.Subtitle>
          <br/>
          <button className="cardBtn" onClick={()=>{handleClick()}}>
            <img src={flag ? "/clicklike.png" : "/like.png"} style={{userSelect: "none"}} alt="likeBtn"/>
          </button>
        </Card.Body>
      </Card>
    </Col>
  )
}
