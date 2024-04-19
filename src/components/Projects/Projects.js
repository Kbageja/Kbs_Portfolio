import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Weather from "../../Assets/Projects/weather.png"
import Zwigato from "../../Assets/Projects/Zwigato.png"
import recipe from "../../Assets/Projects/recipe.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zwigato}
              isBlog={false}
              title=" Food E-Commerce"
              description="Zwigato an  ecommerce website from where user can order food and can pay through various modes such as upi , net banking and cards this all is enabled by razorpay integration TechStack-ReactJs,NodeJs,MongoDb,Razorpay, Github"
              ghLink="https://github.com/Kbageja/zwigato"
              demoLink="https://zwigato-omega.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Recomender"
              description="A Webpage where diet freaks are updated with healthy and keto friendly diets at 12am everyday and thus gets notified.  TechStack: ReactJs, Api's, Github"
              ghLink="https://github.com/Kbageja/recipe-recomender"
              demoLink="https://recipe-recomender.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather "
              description="My first complete html,css and js project which comprises of input field where user have to input the name of place he wants to check weather for. "
              ghLink="https://github.com/Kbageja/weather-app"
              demoLink="https://kbageja.github.io/weather-app/"              
            />
          </Col>

          


         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
