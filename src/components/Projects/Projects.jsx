import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectItem from '../ProjectItem'; // Import the ProjectItem component
import './Projects.css';

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
              description="Role Based Access Control"
              link="https://rolebasedaccesscontrol.netlify.app/"
              githubLink="https://github.com/danutnanu/RoleBasedAccessControl"
            />
            <ProjectItem
              img="clock.png"
              description="25 + 5 Clock"
              link="https://codepen.io/Danut-Nanu/full/MWzwYLY"
              githubLink="https://github.com/danutnanu/freecodecamp/tree/main/Front%20End%20Development%20Libraries/25%20%2B%205%20clock"
            />
          </div>
          {/* Second Column */}
          <div className='col-lg-4 col-md-6 mb-4'>
            <ProjectItem
              img="run.png"
              description="Miles Of Memories"
              link="https://milesofmemories.netlify.app/#"
              githubLink="https://github.com/danutnanu/MilesOfMemories-React"
            />
            <ProjectItem
              img="drum2.png"
              description="Drum Machine"
              link="https://codepen.io/Danut-Nanu/full/KKGLmJL"
              githubLink="https://github.com/danutnanu/freecodecamp/tree/main/Front%20End%20Development%20Libraries/Drum%20Machine"
            />
          </div>
          {/* Third Column */}
          <div className='col-lg-4 col-md-6 mb-4'>
            <ProjectItem
              img="calculator.png"
              description="JavaScript Calculator"
              link="https://codepen.io/Danut-Nanu/full/ExOxYGG"
              githubLink="https://github.com/danutnanu/freecodecamp/tree/main/Front%20End%20Development%20Libraries/JavaScriptCalculator"
            />
            <ProjectItem
              img="heatmap2.png"
              description="Visualize Data with a Heat Map"
              link="https://codepen.io/Danut-Nanu/full/gOQWYzN"
              githubLink="https://github.com/danutnanu/freecodecamp/tree/main/Data%20Visualization%20Certification/Visualize%20Data%20with%20a%20Heat%20Map"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
