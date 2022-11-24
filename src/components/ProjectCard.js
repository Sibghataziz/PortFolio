import { Col } from "react-bootstrap";

const icons ={
  HTML : 'https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw',
  CSS : 'https://e7.pngegg.com/pngimages/239/228/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue.png',
  JavaScripts : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
  Bootstrap:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png',
  "JSON-Server" : "https://miro.medium.com/max/1000/1*Noc7VIpiRX4DOTvMOrY38w.png",
  React : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  Redux : 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
  "Chakra UI" : 'https://miro.medium.com/max/800/1*8hhfdEqRkRQSaJrJlx60zg.png'
}

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
        <h5>Tech Stack: &nbsp;&nbsp; {techStack.map(skill=>{
        return <span style={{textAlign:"center"}} ><img src={icons[skill]} alt="" style={{width : "40px", height: "40px"}}/>&nbsp;&nbsp; </span> 
      })} </h5>
      </div>
      
    </Col>
  )
}
