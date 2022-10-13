import React from "react";
import { Link } from "react-router-dom";
import "../styles/preload.css";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTsnode } from "react-icons/si";
import picture from "../assets/picture.jpg";
import node from "../assets/node.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";

const Preload = () => {
  return (
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
                Sergio Nicolas Moyano
                <br />
                <span>lo que sea</span>
              </h2>
              <Link to="/portfolio">
                {" "}
                <button className="btn1">ENTRAR</button>{" "}
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
  );
};

export default Preload;
