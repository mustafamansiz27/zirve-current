import React from 'react'
import logo from "../../../assets/img/product/2.png";
import aboutResim from "../../../assets/img/product/03819ee6-44ea-4a31-9601-a7cf58127cca.jpg";
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import "./about.scss"
import Menubar from '../header/menubar';
import Footer from '../header/footer';

const About = () => {
  return (
    <div className='about-page'>  
    
        < Menubar/>
       

         <Container className='about-body'>   
            <Row>
          <Col lg={6} className='text mt-5 ' >
             <p>
                   Daha fazla kaliteli ürün ve insan odaklı tasarım ile en üst seviyede kullanıcı memnuniyetini gözeterek müşterilerimize sunmak ve prefabrik yapılar alanında ismimize ve kalitemize uygun biçimde Gaziantep'de lider, hedeflediğimiz dünya pazarlarında müşteri beklentileri ile bölge şartlarına en uygun ürün ve hizmetleri sağlayan global firma olmak şirket politikamızı oluşturmaktadır.
            </p>
         </Col>
            <Col lg={6}>
                <img src={require(`../../../assets/img/product/0aa0ee14-5e8c-4244-a15c-266c8e5e33a0.jpg`)} alt="prefabrik ev" className='img-fluid  mt-5' />
            </Col>
            <Col lg={6}>
                <img src={aboutResim} alt="" className='img-fluid mt-5' />
            </Col>
            <Col lg={6}>
                <p className='mt-5'>
                    
          konteynerler uzmanlık alanımız,şirketimiz 
          
           yüksek kalite panel ve tasarımlı konteyner modelleri ve isteğinize uygun çözümler sunmakta ve
           Dünya standartlarındaki üretimini sağlamlık ve insan odaklı bir anlayışla, yerel ihtiyaçlara göre şekillendirerek, tüketici dostu Prefabrik ve Konteyner çözümleriyle, önceliği Türkiye olmak üzere tüm dünyaya Gaziantep'ten hizmet vermektedir.
                </p>
            </Col>
            </Row>
         </Container>
         

         <Footer/>
       
     
      
    </div>
  )
}

export default About
