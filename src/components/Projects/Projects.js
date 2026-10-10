import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import leaf from "../../Assets/Airesume.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I’ve built and deployed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI Resume Analyzer & Interview Prep Platform"
              description="Built and deployed a full-stack MERN platform, secured with JWT authentication, that analyzes resumes against job descriptions and generates personalized interview reports. The system creates 16 structured insights including ATS gaps, match score, skill gaps, and technical, behavioral, and project-based questions."
              ghLink="https://github.com/Spoider12/AI-Interview"
              demoLink="https://ai-resume-analysis-3ldp.onrender.com"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify — Real-Time Chat Application"
              description="Developed a full-stack MERN real-time chat platform with JWT + bcrypt authentication, private/group messaging, media support, and Socket.io live updates. It includes message persistence in MongoDB, user discovery, and media storage through Cloudinary with email notifications via Nodemailer/Resend."
              ghLink="https://github.com/Spoider12/Chatify-Chatting-"
              demoLink="https://chatify-chatting.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
