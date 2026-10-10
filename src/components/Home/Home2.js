import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">Full-Stack Developer</b> with
              hands-on experience in building and deploying production-ready MERN
              applications. I enjoy turning ideas into scalable systems with a
              strong focus on user experience, backend reliability, and clean code.
              <br />
              <br />
              My core stack includes
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Java, React.js, TypeScript, Node.js, Express.js,
                  MongoDB, MySQL, and PostgreSQL{" "}
                </b>
              </i>
              along with modern tools like Git, GitHub, Socket.io, Cloudinary,
              and JWT authentication.
              <br />
              <br />
              I’ve built AI-powered products, real-time chat platforms, and
              business websites that are deployed and used in production. I am
              especially interested in creating impactful digital products and
              solving real-world problems with technology.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
