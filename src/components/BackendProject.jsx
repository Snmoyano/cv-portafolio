import React from "react";
import folder from "../assets/folder.gif";
import { useTranslation } from "react-i18next";
import "../styles/cardProject.css";

const BackendProject = ({ name, img, domain }) => {
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
          <span>{t("projects.descriptionB")}</span>
        </div>
        <div className="content__icons">
          <a href={domain} className="card__link" target="_blank">
            <img src={folder} alt="" className="mouse__icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default BackendProject;
