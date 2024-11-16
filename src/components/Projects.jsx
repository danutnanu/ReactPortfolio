import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectItem from './ProjectItem'; // Import the ProjectItem component

function Projects() {
  return (
    <Container className="About-header text-secondary me-5 p-0 p-lg-5">
      <h1 className='my-5'>Projects</h1>
      <hr className='my-5' />
      <div className='projects__container'>
        <div className='row g-1 ms-4'>
          {/* First Column */}
          <div className='col-lg-4 col-md-6 mb-4'>
            <ProjectItem
              img="RBAC.png"
              description="RBAC"
              link="/project6"
            />
            <ProjectItem
              img="clock.png"
              description="25 + 5 Clock"
              link="/project1"
            />
          </div>
          {/* Second Column */}
          <div className='col-lg-4 col-md-6 mb-4'>
            <ProjectItem
              img="run.png"
              description="Miles Of Memories"
              link="/project5"
            />
            <ProjectItem
              img="drum2.png"
              description="Drum Machine"
              link="/project3"
            />
          </div>
          {/* Third Column */}
          <div className='col-lg-4 col-md-6 mb-4'>
            <ProjectItem
              img="calculator.png"
              description="JavaScript Calculator"
              link="/project2"
            />
            <ProjectItem
              img="heatmap2.png"
              description="Visualize Data with a Heat Map"
              link="/project4"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
