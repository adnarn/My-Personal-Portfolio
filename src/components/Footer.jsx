import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/nav-icon-1.jpg";
import navIcon2 from "../assets/nav-icon-2.jpg";
import navIcon3 from "../assets/nav-icon-3.jpg";

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
               <a href="https://www.instagram.com/dex_coder" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://wa.me/2349072799446" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/adnarn/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
         </div>
          <p>Copyright 2024. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer