import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TripAdvisor from '../assets/img/TripAdvisor.png'
import BlueMercury from '../assets/img/BlueMercury.png'
import JioMart from '../assets/img/JioMart.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Trip Advisor clone",
      description: "Design & Development",
      imgUrl: TripAdvisor,
      gitgubLink : 'https://github.com/Sibghataziz/TripAdvisorClone',
      deployLink : 'https://tripadvisor-sibghat.netlify.app/',
      techStack : ["JavaScripts","HTML","CSS"],
      summary : "A user can Sign in or Sign up, Book flight tickets, have a glance of different restaurants and places to visit in a city."
    },
    {
      title: "Bluemercury Clone",
      description: "Design & Development",
      imgUrl: BlueMercury,
      gitgubLink : 'https://github.com/Akshaypareek01/unit-5-ProjectMasai',
      deployLink : 'https://bluemercury-sibghat.netlify.app/',
      techStack : ["JavaScripts","HTML","CSS","Bootstrap","JSON-Server"],
      summary : "It is a E-commerce website, where user can Sign In or Sign Up. Check different products, filter and sort the products."
    },
    {
      title: "JioMart Clone",
      description: "Design & Development",
      imgUrl: JioMart,
      gitgubLink : 'https://github.com/Sibghataziz/JioMartClone',
      deployLink : 'https://jiomart-sibghat.netlify.app/',
      techStack : ["React","Redux","JSON-Server","CSS","Chakra UI"],
      summary : "It is a E-commerce website, where user can Sign In or Sign Up. Check different products, filter and sort the products."
    }
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
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
