import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header-custom">
      <div id="carouselExampleCaptions" class="carousel slide ">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="assets/img/reactjs.webp" class="d-block w-100" alt="aa" />
            <div class="carousel-caption  d-md-block">
              <h5>{t("Title1Header")}</h5>
              <p>{t("subTitle1Header")}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="assets/img/hiresystem.webp"
              class="d-block w-100"
              alt="11"
            />
            <div class="carousel-caption  d-md-block">
              <h5>{t("Title2Header")}</h5>
              <p>{t("subTitle2Header")}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="assets/img/developer.webp"
              class="d-block w-100"
              alt="11"
            />
            <div class="carousel-caption  d-md-block">
              <h5>{t("Title3Header")}</h5>
              <p>{t("subTitle3Header")}</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Header;
