import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kinshuk Bageja </span>
            from  <span className="purple">  Delhi , India.</span>
            <br />
            I am currently pursuing <span className="purple">Btech in Computer Science</span> at Guru Gobind Singh Indraprastha University .
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that becomes perfection!"{" "}
          </p>
          <footer className="blockquote-footer">Kinshuk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
