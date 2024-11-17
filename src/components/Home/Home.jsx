import React from 'react';
import Type from '../Type';
import './Home.css';

function Home() {
  return (
    <>
      <div className="fixed-container d-flex flex-column pt-5 mt-5 ms-5 vh-100">
        <div className='content ms-5 ps-5'>
          <h2 className='ms-3 pt-5 mt-5'>
            Hi, there!
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h2>
          <h1 className='mb-1 mt-2' style={{ fontSize: '5rem' }}>
            Danut Nanu
          </h1>
          <h2>
            <Type />
          </h2>
          <div className="d-flex mt-5 ms-3">
            <a href="mailto:danutnanu@icloud.com" target="_blank" className="me-3 text-decoration-none text-dark" aria-label="Email">
              <img src="/email.png" alt="Email" style={{ width: '40px', height: '40px' }} />
            </a>
            <a href="https://www.linkedin.com/in/danut-nanu-7474b4267/" target="_blank" className="me-3 text-decoration-none text-dark" aria-label="LinkedIn">
              <img src="/linkedin2.png" alt="LinkedIn" style={{ width: '40px', height: '40px' }} />
            </a>
            <a href="https://github.com/danutnanu" target="_blank" className="text-decoration-none text-dark" aria-label="GitHub">
              <img src="/github2.png" alt="GitHub" style={{ width: '40px', height: '40px' }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
