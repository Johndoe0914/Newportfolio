import React from "react";
import Card from "./Card";
import { Zoom, Bounce } from "react-reveal";

import Reactjs from "../reactJS.json";
import "./Projects.css";

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Projects</h1>

      <div className='projects__cards'>
        {Reactjs.map((project, i) => (
          <Zoom>
            <Card
              key={i}
              projectName={project.projectName}
              ProjectImage={project.projectImage}
              ProjectDescription={project.projectDescription}
              projectGitUrl={project.projectGitUrl}
              projectUrl={project.projectUrl}
            />
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Projects;
