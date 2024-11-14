import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem({ img, description, link, githubLink }) {
  return (
    <div className="position-relative project-item-container">
      <Link className="project-item-link" to={link}>
        <img className="img-fluid project-item-img" alt={description} src={img} />
        <div className="overlay">
          <h5 className="project-item-text text-center">{description}</h5>
          <div className="button-container">
            <Link to={link} className="btn btn-primary mx-2">View Project</Link>
            <Link to={githubLink} className="btn btn-secondary mx-2">GitHub</Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectItem;
