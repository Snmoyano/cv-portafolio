import React from "react";
import "../styles/navBar.css";
import { useTranslation } from "react-i18next";

const NavBar = ({ handleShow }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <ul className="list__menu">
      <li className="list__menu-li menu__info" onClick={() => handleShow(1)}>
        INFO
      </li>
      <li className="list__menu-li" onClick={() => handleShow(2)}>
        {t("navbar.l2")}
      </li>
      <li className="list__menu-li" onClick={() => handleShow(3)}>
        {t("navbar.l3")}
      </li>
      <li className="list__menu-li" onClick={() => handleShow(4)}>
        ABOUT
      </li>
    </ul>
  );
};

export default NavBar;
