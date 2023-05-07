import React from "react";
import "./konteyner.scss";
import logo from "../../../assets/img/product/2.png";
import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import CardsData from "../header/slides.json";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Menubar from "../header/menubar";
import Footer from "../header/footer";

const Konteyner = () => {
  return (
    <div className="konteyner-page">
      <Menubar />

      <Container className="mt-5 konteyner-card">
        <Row>
          {CardsData.map((card, i) => (
            <Col key={i} lg={3} className="konteyner-map">
              <Card>
                <Card.Img
                  variant="top"
                  src={require(`../../../assets/img/slider/${card.image}`)}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

        <Footer/>
    </div>
  );
};

export default Konteyner;
