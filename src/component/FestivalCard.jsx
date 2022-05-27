
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';

export default function FestivalCard() {
  const [title, setTitle] = useState(["지구야 사랑해"]);
  const [date, setDate] = useState(["2022.04.19 ~ 2022.05.13"]);


  return (
    <Card style={{ width: '20vw' }}>
      <Card.Img variant="top" src="./img.jpg" />
      <Card.Body>
        <Card.Text style={{ fontSize: '1vw' }}>{date[0]}</Card.Text>
        <Card.Title>{title[0]}</Card.Title>
        <br/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
