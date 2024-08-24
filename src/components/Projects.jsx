import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/dexDash.png";
import projImg3 from "../assets/dexVTU.png";
import projImg4 from "../assets/birthdayApp.png";
import projImg5 from "../assets/inventory.png";
import projImg6 from "../assets/weatherApp.png";
import colorSharp2 from "../assets/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Dex Dashboard",
      description: "lA MERN Dashboard with User Profile Authentication",
      imgUrl: projImg2,
    },
    {
      title: "VTU APP",
      description: "React & API Development",
      imgUrl: projImg3,
    },
    {
      title: "Birthday Remainder App",
      description: "React & Crude API",
      imgUrl: projImg4,
    },
    {
      title: "Inventory Managemet",
      description: "NodeJs app that allows you to store Data in Excel Sheet ",
      imgUrl: projImg5,
    },
    {
      title: "Weather API",
      description: "Design & Fetch API Development",
      imgUrl: projImg6,
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
                <p>Experienced in developing a variety of dynamic web applications and complex systems.
                   My portfolio showcases successful implementations of versatile and intuitive solutions,
                    demonstrating my ability to tackle diverse challenges and deliver effective, user-focused results.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>You can see more of my projects at my GitHub Page</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I have extensive experience in developing dynamic web applications and complex systems.
                         My portfolio demonstrates successful implementations of versatile and intuitive solutions,
                          showcasing my ability to address diverse challenges and deliver effective, user-focused results.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
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