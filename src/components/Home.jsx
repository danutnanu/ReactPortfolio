import React from 'react';
import Type from './Type';

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-center">
      <div>
        <h1>
          Hi, there!
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h1>
          I'm Danut Nanu
        </h1>
        <h1>
          <Type />
        </h1>
      </div>
      <img src="/profile.png" alt="Profile" style={{ maxWidth: '230px', height: 'auto', marginLeft: '40px', borderRadius: '5%' }} />
    </div>
  );
}

export default Home;
