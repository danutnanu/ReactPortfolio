import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem({ img, description, link, githubLink }) {
  return (
    <div className="position-relative project-item-container">
      <img className="img-fluid project-item-img" alt={description} src={img} />
      <div className="overlay">
        <h5 className="project-item-text text-center">{description}</h5>
        <div className="button-container">
          <Link to={link} className="btn">View Project</Link>
          <a href={githubLink} className="btn" target="_blank" rel="noopener noreferrer">GitHub Code</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
