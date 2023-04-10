import React from "react";
import "../styles/certificates.css";
import { MdRemoveRedEye } from "react-icons/md";

const Certificates = ({ name, domain, image }) => {
  return (
    <div className="card__certificate">
      <img className="certificate__img" src={image} alt="" />
      <a href={domain} className="" target="_blank">
        <MdRemoveRedEye />
      </a>
    </div>
  );
};

export default Certificates;
