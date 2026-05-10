import { Row, Col } from 'react-bootstrap';
import colorSharp from "../assets/color-sharp.png"

const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>MERN stack developer with production experience. I don't just build locally — I deploy, maintain, and scale.</p>
                        <Row className="skill-grid">
                            <Col xs={12} sm={6} md={4} className="skill-item">
                                <div className="skill-card">
                                    <h5>HTML & CSS</h5>
                                    <p>Responsive, clean, pixel-accurate interfaces</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} className="skill-item">
                                <div className="skill-card">
                                    <h5>JavaScript</h5>
                                    <p>ES6+, async patterns, DOM manipulation</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} className="skill-item">
                                <div className="skill-card">
                                    <h5>React</h5>
                                    <p>Hooks, state management, component architecture</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} className="skill-item">
                                <div className="skill-card">
                                    <h5>Node.js & Express</h5>
                                    <p>REST APIs, authentication, server logic</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} className="skill-item">
                                <div className="skill-card">
                                    <h5>MongoDB</h5>
                                    <p>Schema design, Mongoose, aggregations</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} className="skill-item">
                                <div className="skill-card">
                                    <h5>VPS & Server Deployment</h5>
                                    <p>Contabo VPS, Linux, Vercel, production deployments</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}


export default Skills