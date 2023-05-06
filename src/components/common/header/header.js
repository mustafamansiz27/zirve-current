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
import "./header.scss";
import { Link, useParams } from "react-router-dom";




 
 

const Header = () => {
  return (
    <div className="home-page">

      <Menubar/>
      {/* <div className="header-navbar">
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
                  <BsFillTelephoneFill /> 0554 138 50 12{" "}
                </a>
              </Col>
            </Row>
          </Container>
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
      </div> */}

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
            <h2 className="planning-text bg-dark text-light">
            İyi, uygun maliyetli inşaat bilimini doğru ürün ve malzemelerle birleştirmenin, çevreye duyarlı olurken daha sağlıklı ve verimli bir ev oluşturmaya yardımcı olabileceğini anlıyoruz..
            </h2>
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
                    80m<sup>2</sup> <FaBed/> <FaToilet/>
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
                    21m<sup>2</sup>  <FaBed/> <FaToilet/>
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
                    90m<sup>2</sup> <FaBed/> <FaToilet/>
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
                    21m<sup>2</sup> <FaBed/> <FaToilet/>
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

      <div className="footer">
        <Row>
          <Col lg={3}>
            <h2> KURUMSAL</h2>

            <p>
              İdeal Prefabrik üretimine ilk olarak prefabrike konutlar, ofis
              binaları, deprem evleri ve hafif çelik yapılar ile başlamıştır…
            </p>
          </Col>
          <Col lg={3}>
            <h2>İLETİŞİM</h2>
            <p>Türkiyenin Her Yerinden;</p>
            <p className="number">
              {" "}
              <a href="tel:05541385012 ">
                {" "}
                <BsFillTelephoneFill /> 0554 138 50 12
              </a>{" "}
            </p>
            <p className="gmail-info">
              <GrMail /> info@zirveprefabrilkonteyner.com
            </p>
            <p className="instegram-info">
              <a href="@zirveprefabrikkonteyner">
              <AiFillInstagram/>  @zirveprefabrikkonteyner
              </a>
             
            </p>
          </Col>
          <Col lg={3}>
            <h2>ADRES</h2>

            <p>Sanayi Mahallesi 60098 Nolu Cad No 36 Şehitkamil/Gaziantep</p>
          </Col>
          <Col lg={3}>
            <h2>HAKKIMIZDA</h2>
            <p>
              ZİRVE PREFABRİK KONTEYNER, çok yönlü gelişen ve hızlı değişen
              günümüz dünyasında, Prefabrik ve Konteyner Sektöründe yeniliklere
              açık kişisel ve/veya kurumsal ihtiyaçlara cevap verebilen esnek
              yapısı ile müşteri memnuniyeti odaklı bir üretim yapmaktadır.{" "}
            </p>
          </Col>
          <a href={`https://wa.me/05541385012`} target="_blank">
            <FaWhatsapp size={32} color="green" className="whatsUp" />
          </a>
        </Row>
      </div>
    </div>
  );
};

export default Header;
