import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">

        <Col size={12} sm={6}>
        <h3>Dex<span>Coder</span></h3>
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
               <a href="https://www.linkedin.com/in/adnan-usman-20407240a" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
               <a href="https://github.com/adnarn" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
               <a href="https://www.instagram.com/dex_coder" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
               <a href="https://wa.me/2349072799446" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
         </div>
          <p>&copy; 2024 Adnan@DexDynamics Software Solutions. <br /> All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer
