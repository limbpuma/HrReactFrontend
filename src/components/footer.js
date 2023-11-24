import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-light mt-4 footer-custom">
      <Container>
        <Row>
          <Col className="text-center py-3">
            {t("madeWithLove")} <span className="text-danger"> &#10084; </span>
            {t("footerin")} <FontAwesomeIcon icon={faReact} color="skyblue" />{" "}
            React Bootstrap {t("footerAnd")}{" "}
            <FontAwesomeIcon icon={faJava} color="yellow" /> Java Spring
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-2">
            {t("rightsReserved")} &copy; {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
