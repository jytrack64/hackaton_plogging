import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import '../Menubar.css'

export default function Menubar() {
  return (
    <div>
      <Navbar className='menubar' >
          <Container>
          <Nav className="menubar_icons">
            <Nav.Link className="menubar_icons_main" href="main">Main</Nav.Link>
            <Nav.Link className="menubar_icons_profile" href="/profile">Profile</Nav.Link>
            <Nav.Link className="menubar_icons_event" href="/">Event</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    </div>
  )

}
