import React from "react";
import Menubar from "./menubar";
import Slider from "./slider";
import CardsData from "./slides.json";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBed, FaHighlighter, FaToilet, FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import logo from "../../../assets/img/product/2.png";
import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import avatar from "../../../assets/img/team/avatar-picture.jpg"
import "./header.scss";
import { Link, useParams } from "react-router-dom";
import Footer from "./footer";




 
 

const Header = () => {
  return (
    <div className="home-page">

      <Menubar/>
    

      <div className="planning-photo  mt-5">
        <Row>
          <Col lg={4} className="p-0">
            {" "}
            <img
              src={require(`../../../assets/img/product/2b0aac9b-2c97-4ee1-955e-19baeb62eb1b.jpg`)}
              alt=""
              className="img-fluid h-100 w-100"
            />{" "}
          </Col>
          <Col lg={4} className="p-0">
            {" "}
            <img
              src={require(`../../../assets/img/product/5de2d230-0a81-40b7-b9eb-6282dc3d4f53.jpg`)}
              alt=""
              className="img-fluid h-100 w-100"
            />{" "}
          </Col>
          <Col lg={4}>
             <img className="img-fluid rounded-circle" src={avatar} alt="" />
            {/* <h2 className="planning-text bg-dark text-light">
            İyi, uygun maliyetli inşaat bilimini doğru ürün ve malzemelerle birleştirmenin, çevreye duyarlı olurken daha sağlıklı ve verimli bir ev oluşturmaya yardımcı olabileceğini anlıyoruz..
            </h2> */}
            <p>
            Ev yapımında 5 yıldan fazla deneyime sahip olan ekibimiz, kaliteli ürünler, kaliteli inşaat ve müşteri memnuniyeti sağlamak için gerekenlere sahiptir.
            </p>
          </Col>
        </Row>
      </div>

      <div className="save-life   text-center container-fluid mt-5">
        <img src="" alt="" />

        <div className="save-lives ">
          <div className="work-aria">
          <h2 className="text-light ">ÇALIŞMA ALANLARIMIZ</h2>
          <p  className="text-light ">Önceliklerimiz önceliklerinizdir</p>
          </div>
          
          <Container className="cardInİmage">
            <Row className=" ">
              <Col  xs={12} sm={6}  lg={3} className="one">
                <Card >
                  <Card.Img variant="top" className="img-fluid rounded-circle" src={require(`../../../assets/img/product/20037216-9307-42a8-9619-cf604f27ff0d.jpg`)}  />
                  <Card.Body>
                    <Card.Title>Prefabrik</Card.Title>
                    <Card.Text>
                    80m<sup>2</sup> <FaBed/> 2 <FaToilet/>1
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col  xs={12} sm={6}  lg={3} className=" two ">
              <Card>
                  <Card.Img variant="top"  className="img-fluid rounded-circle text-danger" src={require(`../../../assets/img/product/d34821d5-3ee8-4246-9bd4-55105122df26.jpg`)} />
                  <Card.Body>
                    <Card.Title>Konteyner</Card.Title>
                    <Card.Text>
                    21m<sup>2</sup> <FaBed/> 2 <FaToilet/>1
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col  xs={12} sm={6}  lg={3} className="three">
              <Card >
                  <Card.Img variant="top" className="img-fluid rounded-circle "  src={require(`../../../assets/img/product/f7c84ffb-1668-4e54-a9f2-c0a346e7097f.jpg`)} />
                  <Card.Body>
                    <Card.Title>Kır Evi</Card.Title>
                    <Card.Text>
                    90m<sup>2</sup> <FaBed/> 2 <FaToilet/>1
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col  xs={12} sm={6}  lg={3} className="four">
              <Card >
                  <Card.Img variant="top" className="img-fluid rounded-circle" src={require(`../../../assets/img/product/eed36386-2056-43f7-9ea2-e127601d8170.jpg`)} />
                  <Card.Body>
                    <Card.Title>Çelik Yapı</Card.Title>
                    <Card.Text>
                    21m<sup>2</sup> <FaBed/> 2 <FaToilet/>1
                    </Card.Text>
                  </Card.Body>    
                     
                    
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container className="top-body">
        <Row className="mt-5 ">
          <Col lg={9} className="arrow-col-parent">
            <Slider />
            <Row className="aroow">
              <Col className="arrow-col">
                <span></span>
                <span></span>
                <span></span>
              </Col>
            </Row>
          </Col>

          <Col lg={3}>
            <Row>
              <Col lg={12} className="right-image">
                {" "}
                <figure>
                  {" "}
                  <img
                    className="img-fluid"
                    src={require(`../../../assets/img/product/d34821d5-3ee8-4246-9bd4-55105122df26.jpg`)}
                    alt=""
                  />{" "}
                  <figcaption className="figcaption">Konteyner</figcaption>{" "}
                </figure>{" "}
              </Col>
              <Col lg={12} className="right-image">
                {" "}
                <figure>
                  {" "}
                  <img
                    className="img-fluid"
                    src={require(`../../../assets/img/product/isteğe-göre-tekkatlı-ev.jpg`)}
                    alt=""
                  />{" "}
                  <figcaption className="figcaption">
                    Dublex Prefabrik evler
                  </figcaption>{" "}
                </figure>
              </Col>
              <Col lg={12} className="right-image">
                {" "}
                <figure>
                  {" "}
                  <img
                    className="img-fluid"
                    src={require(`../../../assets/img/product/03819ee6-44ea-4a31-9601-a7cf58127cca.jpg`)}
                    alt=""
                  />{" "}
                  <figcaption className="figcaption">
                    Doğa İle İç İçe{" "}
                  </figcaption>{" "}
                </figure>
              </Col>
            </Row>
          </Col>
        </Row>

        <Container className="mt-5 body-card">
          <Row>
            {CardsData.map((card, i) => (
              <Col key={i} lg={3} className="card-map">
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
      </Container>

      <div className="mb-5">
        <iframe
          title="adress"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3178.938975598737!2d37.38342232815863!3d37.177921189681044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDEwJzQwLjUiTiAzN8KwMjMnMTYuNSJF!5e0!3m2!1str!2str!4v1681116137836!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

     <Footer/>
    </div>
  );
};

export default Header;
