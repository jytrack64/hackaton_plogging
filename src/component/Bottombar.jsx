import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import '../Bottombar.css'

export default function Bottombar() {
  return (
    <div>
      <Navbar  bg="black" variant="dark">
          <Container>
          <Nav className="me-auto">
            <Nav.Link className="main" href="main">Main</Nav.Link>
            <Nav.Link className="event" href="/">Event</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    </div>
  )
}
