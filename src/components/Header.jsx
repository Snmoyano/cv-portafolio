import React from "react";
import "../styles/header.css";
import contact from "../assets/742.gif";
const Header = () => {
  return (
    <header className="header">
      <img src={contact} alt="" className="header__img" />
      <h2 className="header__title">FULL STACK</h2>
      <p className="header__description">Developer</p>
    </header>
  );
};

export default Header;
