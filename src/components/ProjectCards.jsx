import { Col } from "react-bootstrap";

 const ProjectCards = ({ title, description, imgUrl, liveUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          
          <span>{description}</span>
          {liveUrl && (
            <div className="mt-3">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Live
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  )
}

export default ProjectCards