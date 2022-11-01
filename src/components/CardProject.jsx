import React from "react";
import { MdRemoveRedEye } from "react-icons/md";
import mouse from "../assets/eye.gif";

import "../styles/cardProject.css";

const CardProject = ({ name, img, domain }) => {
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
          <span>API en React </span>
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
