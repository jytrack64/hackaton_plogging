import React,{useEffect} from 'react'
import {Navbar,Nav,Container,Offcanvas} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../css/Menubar.css'

export default function Menubar() {
  const handleResize =() => {
  }

  useEffect(() => {
    window.addEventListener('resize',handleResize)
  
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  }, [])
  
  
  return (
    
    <div>
      {['lg'].map((expand)=>(
       <Navbar style={{backgroundColor:'#49e594'}} expand='lg' className="menubar">
        <Container fluid>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            className='menubar_offcanvas'
            placement='start'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Navbar.Brand className='menubar_name1' href="/main">줍고</Navbar.Brand>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/main">메인화면</Nav.Link>
                <Nav.Link href="/running">달리기</Nav.Link>
                <Nav.Link href="/">행사목록</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand className='menubar_name2' href="/main">JubGo</Navbar.Brand>
          <Navbar.Brand className='menubar_profile font-size-1rem' style={{fontSize:'5px'}} href='/profile'>프로필</Navbar.Brand>
        </Container>
      </Navbar>
      ))}
    </div>
  )

}
