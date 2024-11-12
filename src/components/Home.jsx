import React from 'react';
import Type from './Type';

function Home() {
  return (
    <>
      <div className="d-flex align-items-center m-5 vh-100">
        <div className='ms-5 ps-5'>
          <h2 className='ms-5 ps-5'>
            Hi, there!
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h2>
          <h1 style={{ fontSize: '5rem' }}>
            Danut Nanu
          </h1>
          <h2>
            <Type />
          </h2>
          <div className="d-flex mt-5">
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
