import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="p-lg-5 p-md-3 p-sm-3 ms-lg-5 vh-100">
      <h1 className="text-start my-5 pt-5 bor-bottom">About Me</h1>

      {/* First Section */}
      <div className="border-container my-3 py-5 flex-container">
        <div className="image-section my-5 pb-5">
          <img src="/profile.png" alt="Description of image" className="img-fluid rounded border border-dark" />
        </div>
        <div className="text-section my-3">
          <div className="terminal rounded-3">
            <div className="terminal-header">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
            </div>
            <div className="terminal-body fs-5">
              <p><span className="command">danutnanu $</span> <span className="lighter">cat aboutdanut</span></p>
              <p><span className="command">aboutdanut (main) $</span> <span className="lighter">Hello! I'm Danut Nanu. A devoted family man known for my friendly nature and a deep passion for sports. I find immense joy in putting on my running shoes, participating in marathons, and pushing my limits. Beyond my active lifestyle, I'm a motivated Junior Frontend Developer with a solid foundation in web development, particularly in technologies like React, JavaScript, Bootstrap, HTML, and CSS. I am excited about the opportunity to join an innovative team of like-minded individuals. Let's get in touch and look at potential collaborations!</span></p>
            </div>
          </div>
        </div>
      </div>
      <p className="bor-bottom"></p>

      {/* Second Section */}
      <div className="border-container my-3 py-5 flex-container">
        <div className="text-section my-3">
          <div className="terminal rounded-3">
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
              <p className="section-title">Familiar With</p>
              <div className="skills">
                <div>nodejs</div>
                <div>mongodb</div>
                <div>sql</div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-section mt-5 pt-5 pb-5">
          <img src="/profile5.png" alt="Description of image" className="img-fluid rounded border border-dark" />
        </div>
      </div>
      <p className="bor-bottom"></p>

      {/* Third Section */}
      <div className="flex-container border-container my-3 py-5">
        <div className="image-section mb-5 py-5">
          <img src="/profile2.png" alt="Description of image" className="img-fluid rounded border border-dark mt-lg-5 me-lg-5" />
        </div>
        <div className="text-section my-3">
          <div className="terminal rounded-3">
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
                <li><a href="/responsive_web_design.png" title="Responsive Web Design Certificate" target="_blank">Responsive Web Design (html, css)</a></li>
                <li><a href="/javascript.png" title="JavaScript Algorithms and Data Structures Certificate" target="_blank">JavaScript Algorithms and Data Structures (JavaScript)</a></li>
                <li><a href="/frontend-libraries.png" title="Front End Development Libraries Certificate" target="_blank">Front End Development Libraries (React, Bootstrap, jQuery)</a></li>
                <li><a href="/data-visualization.png" title="Data Visualization Certificate" target="_blank">Data Visualization (D3.js)</a></li>
                <li><a href="/backend.png" title="Back End Development and APIs Certificate" target="_blank">Back End Development and APIs (Node, Express, MongoDB)</a></li>
                <li><a href="/backend.png" title="Relational Database Certificate" target="_blank">Relational Database (Bash and SQL)</a></li>
                <li><a href="/quality-assurance.png" title="Quality Assurance Certificate" target="_blank">Quality Assurance (Chai, Mocha)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="bor-bottom my-5"></p>
    </Container>
  );
}

export default About;
