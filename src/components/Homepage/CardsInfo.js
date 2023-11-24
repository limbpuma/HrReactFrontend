import React from "react";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();
  return (
    <div className="container text-center  cards-custom">
      <div className="container p-2">
        <div className="container text-center">
          <h3>{t("sectionTitle")}</h3>
        </div>
      </div>
      {/* Ajusta las clases aquí para controlar el número de columnas en diferentes tamaños de pantalla */}
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
        {/* Repite este bloque para cada tarjeta */}
        <div class="col custom-card">
          <div class="card h-100">
            <img src="assets/img/card1.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">{t("employeeManagementTitle")}</h5>
              <p className="card-text">{t("employeeManagementDescription")}</p>
            </div>
          </div>
        </div>
        <div class="col custom-card">
          <div class="card h-100">
            <img src="assets/img/card2.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">{t("databaseTitle")}</h5>
              <p className="card-text">{t("databaseDescription")}</p>
            </div>
          </div>
        </div>
        <div class="col custom-card">
          <div class="card h-100">
            <img src="assets/img/card3.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">{t("technologyTitle")}</h5>
              <p className="card-text">{t("technologyDescription")}</p>
            </div>
          </div>
        </div>
        <div class="col custom-card">
          <div class="card h-100">
            <img src="assets/img/card4.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">{t("multilingualTitle")}</h5>
              <p className="card-text">{t("multilingualDescription")}</p>
            </div>
          </div>
        </div>
        <div class="col custom-card">
          <div class="card h-100">
            <img src="assets/img/card5.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">{t("cloudHostingTitle")}</h5>
              <p className="card-text">{t("cloudHostingDescription")}</p>
            </div>
          </div>
        </div>
        <div class="col custom-card">
          <div class="card h-100">
            <img src="assets/img/card6.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 className="card-title">{t("userInterfaceTitle")}</h5>
              <p className="card-text">{t("userInterfaceDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
