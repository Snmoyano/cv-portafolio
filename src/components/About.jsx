import React from "react";
import "../styles/about.css";
import github from "../assets/github.svg";
import react from "../assets/react.svg";
import node from "../assets/nodejs.svg";
import redux from "../assets/redux.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import mongo from "../assets/mongo.svg";
import postgres from "../assets/sql.svg";
import Form from "../Form";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="about__container">
      <h1>{t("about.title")}</h1>

      <div className="about__description">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
        <p>{t("about.p3")}</p>
        <div className="skills">
          <img src={html} alt="" className="img__logo " />
          <img src={css} alt="" className="img__logo " />
          <img src={redux} alt="" className="img__logo " />
          <img src={node} alt="" className="img__logo " />
          <img src={react} alt="" className="img__logo " />
          <img src={github} alt="" className="img__logo " />
          <img src={postgres} alt="" className="img__logo " />
          <img src={mongo} alt="" className="img__logo " />
        </div>
        <div className="container__cvs">
          <a
            href="https://drive.google.com/file/d/1TDAiAuKw_BFVLuGB-jlmP9gpAj2apYOC/view?usp=share_link"
            className="flowrino-btn"
          >
            {t("about.cves")}
          </a>
          <a
            href="https://drive.google.com/file/d/1yBns3Z74OplwTuaC0iiO9Jr36cd9FTUi/view?usp=sharing"
            className="flowrino-btn"
          >
            {t("about.cven")}
          </a>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default About;
