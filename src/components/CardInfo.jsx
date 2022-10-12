import React from "react";
import "../styles/cardInfo.css";
import picture from "../assets/picture.jpg";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { SiGooglemaps } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const CardInfo = () => {
  return (
    <article className="card__info">
      <div className="card__image">
        <img src={picture} alt="" />
      </div>

      <h1 className="card__title">Frontend Nicolas</h1>
      <ul className="card__list-des">
        <li className="card__description">
          Full Stack Developer <br /> SQL || CSS || HTML ||JAVASCRIPT ||REACT||
          REDUX||
        </li>
        <li className="card__email"> sergio.nicolas.moyano@gmail.com</li>
      </ul>
      <div className="card__icons">
        <a
          href="https://www.linkedin.com/in/sergio-nicolas-moyano-a04873210/"
          target="_blank"
        >
          <TiSocialLinkedinCircular />
        </a>
        <a href="https://github.com/Snmoyano" target="_blank">
          <AiFillGithub />
        </a>
        <a href="" target="_blank">
          <TiSocialTwitterCircular />
        </a>
      </div>
      <div className="card__ubication">
        <SiGooglemaps />
        <p>Mendoza , Argentina</p>
      </div>
      <div className="card__buttons">
        <a className="card__btn-a" href="http://wa.link/q92v0n" target="_blank">
          <button className="card__btn   btn__whats">
            <BsWhatsapp />
          </button>
        </a>
        <a
          className="card__btn-a"
          href="mailto:sergio.nicolas.moyano@gmail.com"
          target="_blank"
        >
          <button className="card__btn   btn__email">
            <MdOutlineMailOutline />
          </button>
        </a>
      </div>
    </article>
  );
};

export default CardInfo;
