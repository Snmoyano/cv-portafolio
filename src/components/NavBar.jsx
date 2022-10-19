import React from "react";
import "../styles/navBar.css";

const NavBar = ({ handleShow }) => {
  return (
    <ul className="list__menu">
      <li className="list__menu-li menu__info" onClick={() => handleShow(1)}>
        INFO
      </li>
      <li className="list__menu-li" onClick={() => handleShow(2)}>
        PROJECTS
      </li>
      <li className="list__menu-li" onClick={() => handleShow(3)}>
        CERTIFICATES
      </li>
      <li className="list__menu-li" onClick={() => handleShow(4)}>
        ABOUT ME
      </li>
    </ul>
  );
};

export default NavBar;
