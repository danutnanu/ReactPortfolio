import React from 'react';

function About() {
  return (
    <div className="container-fluid mt-5 pt-5 px-5 vh-100">
      <h1 className="text-center my-2">About Me</h1>
      <div className="border-container my-5 ps-5 pt-5" style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', width: '100%' }}>
        <div className="image-section ms-4" style={{ flex: '1', display: 'flex', alignItems: 'center', padding: '0 70px' }}>
          <img src="/profile.png" alt="Description of image" className="img-fluid rounded border border-dark" style={{ height: '100%', maxHeight: '400px', width: 'auto' }} />
        </div>
        <div className="text-section me-4 pe-5" style={{ flex: '1', padding: '0 20px' }}>
          <div className="terminal">
            <div className="terminal-header">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
            </div>
            <div className="terminal-body fs-5">
              <p><span className="command">danutnanu $</span> <span className="lighter">cat aboutdanut</span></p>
              <p><span className="command">aboutdanut (main) $</span> <span className="lighter">Hello! I'm Danut Nanu. A devoted family man known for my friendly nature and a deep passion for sports. I find immense joy in putting on my running shoes, participating in marathons, and pushing my limits. Beyond my active lifestyle, I'm a motivated Junior Frontend Developer with a solid foundation in web development, particularly in technologies like React, JavaScript, Bootstrap, HTML, and CSS. I am excited about the opportunity to join an innovative team of like-minded individuals. Let's get in touch and look at potential collaborations! </span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-container" style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', width: '100%' }}>
        <div className="text-section m-5 px-5">
          <div className="terminal">
            <div className="terminal-header">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
            </div>
            <div className="terminal-body fs-5">
              <p><span className="command">danutnanu $</span> <span className="lighter">cd skills/tools</span></p>
              <p><span className="command">skills/tools (main) $</span> <span className="lighter">ls</span></p>
              <p className="section-title">Proficient With</p>
              <div className="skills">
                <div>javascript</div>
                <div>react</div>
                <div>git</div>
                <div>github</div>
                <div>bootstrap</div>
                <div>html5</div>
                <div>css3</div>
              </div>
              <p className="section-title">Exposed To</p>
              <div className="skills">
                <div>nodejs</div>
                <div>mongodb</div>
                <div>sql</div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-section m-5 px-5" style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
          <img src="/profile.png" alt="Description of image" className="img-fluid rounded border border-dark" style={{ height: '100%', maxHeight: '400px', width: 'auto' }} />
        </div>
      </div>
      <div className="border-container my-5 mx-0" style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', width: '100%' }}>
        <div className="image-section m-4" style={{ flex: '1', display: 'flex', alignItems: 'center', padding: '0 80px' }}>
          <img src="/profile.png" alt="Description of image" className="img-fluid rounded border border-dark" style={{ height: '100%', maxHeight: '400px', width: 'auto' }} />
        </div>
        <div className="text-section m-4" style={{ flex: '1', padding: '0 20px' }}>
          <div className="terminal">
            <div className="terminal-header">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
            </div>
            <div className="terminal-body fs-5">
              <p><span className="command">danutnanu $</span> <span className="lighter">cd certificate</span></p>
              <p><span className="command">certificate (main) $</span> <span className="lighter">ls</span></p>
              <p className="section-title">FreeCodeCamp Frontend Certificates</p>
              <ul className="skills">
                <li><a href="./public/responsive_web_design.png" title="Responsive Web Design Certificate"
                  target="_blank">Responsive Web Design (html, css)</a></li>
                <li><a href="./public/javascript.png" title="JavaScript Algorithms and Data
                Structures Certificate" target="_blank">JavaScript Algorithms and Data Structures (JavaScript)</a></li>
                <li><a href="./public/frontend-libraries.png" title="Front End Development Libraries Certificate"
                  target="_blank">Front End Development Libraries (React, Bootstrap, jQuery)</a></li>
                <li><a href="./public/data-visualization.png" title="Data Visualization Certificate" target="_blank">Data Visualization (D3.js)</a></li>
                <li><a href="./public/backend.png" title="Back End Development and APIs Certificate" target="_blank">Back End Development and APIs (Node, Express, MongoDB)</a></li>
                <li><a href="./public/backend.png" title="Back End Development and APIs Certificate" target="_blank">Relational Database (Bash and SQL)</a></li>
                <li><a href="./public/quality-assurance.png" title="Quality Assurance Certificate" target="_blank">Quality Assurance (Chai, Mocha)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
