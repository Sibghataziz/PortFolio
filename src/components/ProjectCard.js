import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitgubLink, deployLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p><a href={deployLink} target='_blank' style={{color : "white"}}>Live Demo</a></p>
          <p><a href={gitgubLink} target='_blank' style={{color : "white"}}>View Project</a></p>
        </div>
      </div>
    </Col>
  )
}
