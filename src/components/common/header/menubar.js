import React from 'react';
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../../../assets/img/product/2.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import "./menubar.scss"
import { FaWhatsapp } from 'react-icons/fa';

const Menubar = () => {
  return (
    <div className="header-navbar">
    <div className="gradiant">  
      <Container className="gradiant-container">
        <Row className="zirve-topbar">
          <Col>  
            {" "}
            <a href="">
              {" "}
              <img src={logo} alt="prefabrik ev" />{" "}
            </a>
          </Col>

          <Col className="top-number">
            
            <a href="tel:05541385012">
              {" "}
              <BsFillTelephoneFill /> 0533 659 91 27  {" "}
            </a>
            
          </Col>
        </Row>
      </Container>
     
    </div>
    <div className='my-whatsup'>
    <a href={`https://wa.me/05336599127`} target="_blank">
        <FaWhatsapp size={32} color="green" className="whatsUp" />
      </a>
      </div>

    <Navbar className="navbar-streach fixed-top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hayalleriniz Burada</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end ">
          <Nav.Link as={Link} to="/">
            Ana Sayfa
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            Hakkımızda
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            İletişim
          </Nav.Link>
          <Nav.Link as={Link} to="/konteyner">
            Konteyner
          </Nav.Link>
          <Nav.Link href="#link">Yapı Malzemeleri</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default Menubar
