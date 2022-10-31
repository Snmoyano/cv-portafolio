import React from "react";
import { Link } from "react-router-dom";
import "../styles/preload.css";
import picture from "../assets/picture.jpg";
import node from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import mouse from "../assets/1315.gif";

const Preload = () => {
  return (
    <>
      <div className="preload">
        {" "}
        <div className="card">
          <div className="lines"></div>
          <div className="imgBx">
            <img src={picture} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <div className="actionBtn  ">
                <h2>
                  SERGIO NICOLAS MOYANO
                  <br />
                  <span>DEVELOPER</span>
                </h2>
                <Link to="/portfolio">
                  <button className="btn1">TOUCH</button>{" "}
                </Link>
              </div>
              <div className="data">
                <img src={react} alt="" />
                <img src={redux} alt="" />
                <img src={node} alt="" />
              </div>
              <div className="actionBtn btn2">
                <Link to="/portafolio">
                  {" "}
                  <button>ENTRAR</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preload;
