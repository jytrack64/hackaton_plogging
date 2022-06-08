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
       <Navbar key={expand} style={{background:'rgba(255,255,255,0.5)'}} expand='lg' className="menubar">
        <Container fluid style={{padding:'0 0 0 8px'}}>

          <Navbar.Toggle style={{border:'0',}}  aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
            <Navbar.Brand className='menubar_name1' href="/">줍고</Navbar.Brand>
              <Nav  className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/">메인화면</Nav.Link>
                <Nav.Link href="/running">달리기</Nav.Link>
                <Nav.Link href="/event">행사목록</Nav.Link>
                <Nav.Link href="/login">로그인</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand className='menubar_name2' href="/">JubGo</Navbar.Brand>
          <Navbar.Brand className='menubar_profile font-size-2rem' style={{fontSize:'25px'}} href='/profile'>ㅤㅤ</Navbar.Brand>
        </Container>
      </Navbar>
      ))}
    </div>
  )

}
