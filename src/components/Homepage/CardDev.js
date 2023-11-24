import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const MiCard = () => {
  const { t } = useTranslation();

  return (
    <div className="carddev-custom mx-auto">
      <div className="container my-5">
        <div className="container text-center">
          <h3>{t("aboutTitle")}</h3>
        </div>
      </div>
      <Card className=" text-center mx-auto">
        <Card.Img
          variant="top"
          src="assets/img/deve.webp"
          className="w-25 rounded-circle mx-auto mt-3 "
        />
        <Card.Body>
          <Card.Title>{t("name")}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {t("professionalTitle")}
          </Card.Subtitle>
          <Card.Text>{t("aboutMe")}</Card.Text>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/limber-martinez-developer/"
            target="_blank"
            className="mx-2 g-2"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Button>
          <Button
            variant="secondary"
            href="https://github.com/limbpuma"
            target="_blank"
            className="mx-2 g-2"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default MiCard;
