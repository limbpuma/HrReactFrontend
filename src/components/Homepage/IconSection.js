import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faBootstrap,
  faJava,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const IconsHome = () => {
  return (
    <Container>
      <Row className="text-center iconsection-custom">
        <Col>
          <FontAwesomeIcon icon={faReact} size="3x" />
          <p>React</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faBootstrap} size="3x" />
          <p>Bootstrap</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faJava} size="3x" />
          <p>Java</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faAws} size="3x" />
          <p>Spring</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faDatabase} size="3x" />
          <p>MySQL</p>
        </Col>
      </Row>
    </Container>
  );
};

export default IconsHome;
