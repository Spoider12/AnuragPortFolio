import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Anurag Gautam</span>, a
            full-stack developer focused on building clean, scalable, and
            production-ready web applications.
            <br />
            I have experience building and deploying MERN applications, including
            an AI-powered resume analysis platform using the Gemini API.
            <br />
            I recently completed my <span className="purple">B.Tech in Computer
            Science (AI)</span> from <span className="purple">ABES Institute of
            Technology, Ghaziabad</span>, graduating in June 2026.
            <br />
            <br />
            My strengths include:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Full-stack development with React, Node.js, and Express
            </li>
            <li className="about-activity">
              <ImPointRight /> REST API design, JWT authentication, and real-time messaging with Socket.io
            </li>
            <li className="about-activity">
              <ImPointRight /> Database design using MongoDB, MySQL, and PostgreSQL
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem solving, DSA, and building projects that solve real-world challenges
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I build products that are useful, reliable, and ready to scale."
          </p>
          <footer className="blockquote-footer">Anurag</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
