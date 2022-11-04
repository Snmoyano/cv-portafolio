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

const About = () => {
  return (
    <div className="about__container">
      <h1>Soy Nicolas</h1>
      <div className="about__description">
        <p>
          Developer con grandes capacidades y actitudes para afrontar retos y
          superarlos aportando al grupo de trabajo y asi poder lograr el
          objetivo propuesto.
        </p>
        <p>
          Cuento con conocimientos en BackEnd en SQL trabajando 3 años en una
          empresa dedicada a la contabilidad de estaciones despachadoras de
          combusitbles
        </p>
        <p>
          Actualmente me encuentro estudiando diseño 3D (threejs)orientado a la
          web ademas estoy realizando un bootcamp donde a obtuve mi
          certificaiones de fundamentos de la programación y como desarrollador
          FrontEnd.
        </p>
        <a
          href="https://drive.google.com/file/d/1TDAiAuKw_BFVLuGB-jlmP9gpAj2apYOC/view?usp=share_link"
          className="flowrino-btn"
        >
          Descargar CV
        </a>
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
        <Form />
      </div>
    </div>
  );
};

export default About;
