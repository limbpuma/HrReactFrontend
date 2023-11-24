import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="assets/img/logoappbooking.webp"
              alt="Logo"
              class="d-inline-block align-text-top rounded-circle me-2"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {t("home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/empleados">
                  {t("listEmployees")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/agregar-empleado">
                  {t("addEmployee")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("languages")} <FontAwesomeIcon icon={faGlobe} />
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      <button onClick={() => i18n.changeLanguage("de")}>
                        <img
                          src="../assets/img/de.webp"
                          alt="English"
                          width="20"
                          height="20"
                          class="me-2 rounded-circle"
                        />
                        {t("german")}
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <button onClick={() => i18n.changeLanguage("es")}>
                        <img
                          src="../assets/img/es.webp"
                          alt="English"
                          width="20"
                          height="20"
                          class="me-2 rounded-circle"
                        />
                        {t("spanish")}
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <button onClick={() => i18n.changeLanguage("en")}>
                        <img
                          src="../assets/img/en.webp"
                          alt="English"
                          width="20"
                          height="20"
                          class="me-2 rounded-circle"
                        />
                        {t("english")}
                      </button>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
