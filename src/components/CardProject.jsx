import React from "react";
import mouse from "../assets/eye.gif";
import { useTranslation } from "react-i18next";
import "../styles/cardProject.css";

const CardProject = ({ name, img, domain }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <article
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="card__project"
    >
      <div className="card__content">
        <div className="content__titles">
          <h2 className="card__title">{name}</h2>
          <span>{t("projects.descriptionF")}</span>
        </div>
        <div className="content__icons">
          {/* <BiLike /> */}
          <a href={domain} className="card__link" target="_blank">
            ⇣
            <img src={mouse} alt="" className="mouse__icon" />
            {/* <MdRemoveRedEye /> */}
          </a>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
