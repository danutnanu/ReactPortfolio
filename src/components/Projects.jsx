import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectItem from './ProjectItem'; // Import the ProjectItem component

function Projects() {
  return (
    <Container className="About-header text-secondary me-5 p-0 p-lg-5">
      <h1 className='my-5'>Projects</h1>
      <hr className='my-5' />
      <div className='projects__container'>
        <div className='row g-1'>
          {/* First Column */}
          <div className='col-lg-4 col-md-6 mb-4'>
            <ProjectItem
              img="profile.png"
              description="Project 1: Description"
              link="/project1"
            />
            <ProjectItem
              img="profile2.png"
              description="Project 4: Description"
              link="/project4"
            />
          </div>
          {/* Second Column */}
          <div className='col-lg-4 col-md-6 mb-4'>
            <ProjectItem
              img="profile3.png"
              description="Project 2: Description"
              link="/project2"
            />
            <ProjectItem
              img="profile6.png"
              description="Project 5: Description"
              link="/project5"
            />
             <ProjectItem
              img="profile7.png"
              description="Project 7: Description"
              link="/project7"
            />
          </div>
          {/* Third Column */}
          <div className='col-lg-4 col-md-6 mb-4'>
            <ProjectItem
              img="profile5.png"
              description="Project 3: Description"
              link="/project3"
            />
            <ProjectItem
              img="profile4.png"
              description="Project 6: Description"
              link="/project6"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
