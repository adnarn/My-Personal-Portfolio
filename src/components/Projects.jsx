import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projImg1 from "../assets/image1.png";
import projImg2 from "../assets/image2.png";
import projImg3 from "../assets/image3.png";
import colorSharp2 from "../assets/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "SkillConnect",
      description: "A location-based marketplace connecting clients with verified skilled workers across Nigeria. Features real-time map, KYC verification, in-app chat, booking system, and superadmin dashboard. Built with MERN stack, hosted on Contabo VPS.",
      liveUrl: "https://skills-connect-flhj.vercel.app",
      imgUrl: projImg1,
    },
    {
      title: "AlTakween",
      description: "A travel booking platform for Umrah packages featuring a flexible Save-for-Umrah savings plan, package browsing, secure booking flow, and airline partner listings. Built and deployed solo for a real client.",
      liveUrl: "https://altakween.vercel.app",
      imgUrl: projImg2,
    },
    {
      title: "Dosaclick",
      description: "A full business website built for a real client offering document printing, ID card production, NIN enrollment, logo design, and more. Live and serving real customers.",
      liveUrl: "https://dosaclick.com.ng",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Three live products. Three real clients or real users. Built solo from zero to deployment.</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects
