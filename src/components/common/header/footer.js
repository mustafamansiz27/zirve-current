import React from 'react'
import "./footer.scss"
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="footer">
    <Row>
      <Col lg={3} md={6} sm={6} >
        <h2> KURUMSAL</h2>

        <p>
          İdeal Prefabrik üretimine ilk olarak prefabrike konutlar, ofis
          binaları, deprem evleri ve hafif çelik yapılar ile başlamıştır...
        </p>
      </Col>
      <Col lg={3} md={6} sm={6} className='footer-contact'>
        <h2>İLETİŞİM</h2>
        <p>Türkiyenin Her Yerinden;</p>
        <p className="number">
          {" "}
          <a href="tel:05336599127 ">
            {" "}
            <BsFillTelephoneFill /> 05336599127
          </a>{" "}
        </p>
        <p className="gmail-info">
          <GrMail/> <span className='gmail'> info@zirveprefabrilkonteyner.com </span>
        </p>
        <p className="instegram-info">
          <a href="https://instagram.com/zirveprefabrikkonteyner?igshid=MzRlODBiNWFlZA==">
          <AiFillInstagram/>  @zirveprefabrikkonteyner
          </a>
         
        </p>
      </Col>  
      <Col lg={3} md={6} sm={6}> 
        <h2>ADRES</h2>

        <p>Sanayi Mahallesi 60098 Nolu Cad No 36 Şehitkamil/Gaziantep</p>
      </Col>
      <Col lg={3}  md={6} sm={6}>
        <h2>HAKKIMIZDA</h2>
        <p>
          ZİRVE PREFABRİK KONTEYNER, çok yönlü gelişen ve hızlı değişen
          günümüz dünyasında, Prefabrik ve Konteyner Sektöründe yeniliklere
          açık kişisel ve/veya kurumsal ihtiyaçlara cevap verebilen esnek
          yapısı ile müşteri memnuniyeti odaklı bir üretim yapmaktadır.{" "}
        </p>
      </Col>
    
    </Row>
  </div>
  )
}

export default Footer

