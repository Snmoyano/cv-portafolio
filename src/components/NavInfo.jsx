import React from "react";
import "../styles/navInfo.css";

const NavInfo = ({ show }) => {
  return (
    <div className={`nav__info ${show === 1 ? "show" : ""}`}>
      <h2 className="info__title m-bottom"></h2>

      <ul className="info__list ">
        <li className="info__item">
          {/* <div className="skills">
            <img src={html} alt="" className="img__logo " />
            <img src={css} alt="" className="img__logo " />
            <img src={redux} alt="" className="img__logo " />
            <img src={node} alt="" className="img__logo " />
            <img src={react} alt="" className="img__logo " />
            <img src={github} alt="" className="img__logo " />
            <img src={postgres} alt="" className="img__logo " />
            <img src={mongo} alt="" className="img__logo " />
          </div> */}
        </li>
        <li className="info__item"> — Full Stack —</li>
        <li className="info__item"> — Web desing —</li>
        <li className="info__item"> — Mobile Desing —</li>
        <li className="info__item"> — UI/UX —</li>
        <li className="info__item"> — Scrum —</li>
      </ul>
      {/* <h3 className="m-bottom">Contact with me: </h3> */}
      <ul className="info__contact m-bottom">
        {/* <li>
          <span>Phone: </span>+542615862109
        </li>
        <li>
          <span>Email: </span>sergio.nicolas.moyano@gmail.com
        </li> */}
      </ul>
    </div>
  );
};

export default NavInfo;
