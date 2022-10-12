import proyects from "../json/proyects.json";
import React from "react";
import CardProject from "./CardProject";
import "../styles/listProject.css";

const ListProject = () => {
  return (
    <div className="container__proyects">
      {proyects.map((project) => (
        <CardProject
          key={project.name}
          name={project.name}
          img={project.image}
          domain={project.domain}
        />
      ))}
    </div>
  );
};

export default ListProject;
