import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/nav-icon-1.jpg';
import navIcon2 from '../assets/nav-icon-2.jpg';
import navIcon3 from '../assets/nav-icon-3.jpg';
import {BrowserRouter as Router, Link} from "react-router-dom";

 const Header = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h3 className="logo">Dex<span className="logo">Coder</span></h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                 <a href="https://www.instagram.com/dex_coder" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://wa.me/2349072799446" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/adnarn/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
              </div>
              <Link to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default Header