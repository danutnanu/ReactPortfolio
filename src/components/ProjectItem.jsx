import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem({ img, description, link, githubLink }) {
  return (
    <div className="position-relative project-item-container mx-auto mb-5 border border-dark border-4 rounded-3">
      <img className="img-fluid project-item-img w-100" alt={description} src={img} />
      <div className="overlay position-absolute d-flex flex-column p-3 m-3">
        <h5 className="project-item-text p-2 mb-auto text-center rounded">{description}</h5>
        <div className="button-container">
          <Link to={link} className="btn rounded-pill" target="_blank">View</Link>
          <a href={githubLink} className="btn rounded-pill" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
