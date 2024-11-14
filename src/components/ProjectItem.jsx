import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem({ img, description, link }) {
  return (
    <div className="position-relative project-item-container">
      <Link className="project-item-link" to={link}>
        <img className="img-fluid project-item-img" alt={description} src={img} />
        <div className="overlay">
          <h5 className="project-item-text text-center">{description}</h5>
          <button className="btn custom-button mt-2">View Project</button>
        </div>
      </Link>
    </div>
  );
}

export default ProjectItem;
