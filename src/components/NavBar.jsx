import React from "react";
import "../styles/navBar.css";

const NavBar = ({ handleShow }) => {
  return (
    <ul className="list__menu">
      <li className="list__menu-li menu__info" onClick={() => handleShow(1)}>
        Info
      </li>
      <li className="list__menu-li" onClick={() => handleShow(2)}>
        Projects
      </li>
      <li className="list__menu-li" onClick={() => handleShow(3)}>
        Certificates
      </li>
      <li className="list__menu-li" onClick={() => handleShow(4)}>
        About
      </li>
    </ul>
  );
};

export default NavBar;
