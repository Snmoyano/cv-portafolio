import React from "react";
import "../styles/navInfo.css";

const NavInfo = ({ show }) => {
  return (
    <div className={`nav__info ${show === 1 ? "show" : ""}`}>
      <h2 className="info__title m-bottom">About me</h2>
      <span className="m-bottom">holaaa mundo</span>
      <ul className="info__list m-bottom">
        <li className="info__item">
          {" "}
          - Front End developer
          <br />
          (HMTL,CSS,JS,React JS , GIT)
        </li>
        <li className="info__item"> — Web desing</li>
        <li className="info__item"> — Mobile Desing</li>
        <li className="info__item"> — UI/UX</li>
        <li className="info__item"> — Scrum</li>
      </ul>
      <h3 className="m-bottom">Contact with me: </h3>
      <ul className="info__contact m-bottom">
        <li>
          <span>Phone: </span>+542615862109
        </li>
        <li>
          <span>Email: </span>sergio.nicolas.moyano@gmail.com
        </li>
      </ul>
    </div>
  );
};

export default NavInfo;
