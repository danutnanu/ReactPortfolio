import React from 'react';

function About() {
  return (
    <div className="container mt-5 m-2 pt-5 vh-100">
      <h1 className="text-center my-5">About Me</h1>
      <div className="border-container" style={{ display: 'flex', border: '2px solid #000', borderRadius: '8px', overflow: 'hidden' }}>
        <div className="image-section m-4 px-5" style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
          <img src="/profile.png" alt="Description of image" className="img-fluid" style={{ height: '100%', maxHeight: '400px', width: 'auto' }} />
        </div>
        <div className="text-section m-4 px-5">
          <div className="terminal">
            <div className="terminal-header">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
            </div>
            <div className="terminal-body">
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
      </div>
    </div>
  );
}

export default About;