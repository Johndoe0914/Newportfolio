import React from "react";
import "./Card.css";

const Card = ({
  projectName,
  ProjectImage,
  ProjectDescription,
  projectGitUrl,
  projectUrl,
}) => {
  return (
    <div className='card' onClick={() => window.location.assign(projectUrl)}>
      <img src={ProjectImage} />
      <div className='card__info'>
        <h3>{projectName}</h3>
        <a href={projectGitUrl}>Github</a>
        <p>{ProjectDescription}</p>
      </div>
    </div>
  );
};

export default Card;
