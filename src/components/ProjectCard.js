import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitgubLink, deployLink, techStack, summary }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p><a href={deployLink} target='_blank' style={{color : "white"}}>Live Demo</a></p>
          <p><a href={gitgubLink} target='_blank' style={{color : "white"}}>View Project</a></p>
        </div>
      </div>
      <div>
        <p>{summary}</p>
        <h5>Tech Stack:</h5>
        <div style={{display: "grid", gridTemplateColumns : "repeat(3,1fr)"}}> {techStack.map(skill=>{
        return <span style={{textAlign:"center"}} >{skill} </span> 
      })} </div>
      </div>
      
    </Col>
  )
}
