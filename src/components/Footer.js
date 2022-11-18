import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/GitHub-Mark.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <h1 style={{color:"white", fontSize:"50px"}}>Md Sibghat Aziz</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{marginTop: "10px"}}>
              <a href="https://www.linkedin.com/in/md-sibghat-aziz-9b19641ab/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Sibghataziz" target="_blank"><img src={navIcon4} alt="" /></a>
              <a href="https://www.facebook.com/sibghat.aziz/" target="_blank"><img src={navIcon2} alt="Icon"/></a>
              <a href="https://www.instagram.com/sibghat_aziz/" target="_blank"><img src={navIcon3} alt="Icon"/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
