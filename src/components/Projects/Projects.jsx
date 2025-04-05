import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectItem from '../ProjectItem'; 
import './Projects.css';

function Projects() {
  return (
    <Container className="p-lg-5 p-md-3 p-sm-3 ms-lg-5 vh-100">
      <h1 className='text-start my-5 pt-5 bor-bottom'>Projects</h1>
      <div className='projects__container'>
        <div className='row g-5 justify-content-center'>
          {/* First Column */}
          <div className='col-12 col-md-6 col-lg-4 mb-4'>
          <ProjectItem
              img="remotetrends.png"
              description="RemoteTrends"
              link="https://remotetrends.netlify.app/"
              githubLink="https://github.com/danutnanu/RemoteTrends"
            />
            <ProjectItem
              img="clock.png"
              description="25 + 5 Clock"
              link="https://codepen.io/Danut-Nanu/full/MWzwYLY"
              githubLink="https://github.com/danutnanu/freecodecamp/tree/main/Front%20End%20Development%20Libraries/25%20%2B%205%20clock"
            />
          </div>
          {/* Second Column */}
          <div className='col-12 col-md-6 col-lg-4 mb-4'>
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
          <div className='col-12 col-md-6 col-lg-4 mb-4'>
          <ProjectItem
              img="RBAC.png"
              description="Role Based Access Control"
              link="https://rolebasedaccesscontrol.netlify.app/"
              githubLink="https://github.com/danutnanu/RoleBasedAccessControl"
            />
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
      <p className="bor-bottom mb-5"></p>
    </Container>
  );
}

export default Projects;
