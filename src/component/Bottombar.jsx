import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import '../Bottombar.css'

export default function Bottombar() {
  return (
    <div>
      <Navbar className='bottombar' >
          <Container>
          <Nav className="bottombar_icons">
            <Nav.Link className="bottombar_icons_main" href="main">Main</Nav.Link>
            <Nav.Link className="bottombar_icons_event" href="/">Event</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    </div>
  )

}
