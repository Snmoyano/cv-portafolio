import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about__container">
      <h1>Soy Nicolas</h1>
      <div className="about__description">
        <p>
          Developer con grandes capacidades y actitudes para afrontar retos y
          superlos aportando al grupo de trabajo y asi poder lograr el objetivo
          propuesto.
        </p>
        <p>
          Cuento con conocimientos en BackEnd en SQL trabajando 3 años en una
          empresa dedicada a la contabilidad de estaciones despachadoras de
          combusitbles
        </p>
        <p>
          Actualmente me encuentro estudiando diseño 3D (threejs)orientado a la
          web ademas estoy realizando un bootcamp donde a obtuve mi
          certificaiones de fundamentos de la programacion y como desarrollador
          FrontEnd.
        </p>
      </div>
    </div>
  );
};

export default About;
