import React from 'react';
import Type from './Type'; 

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-center">
      <div>
        <h1>Hi, I'm:</h1>
        <h1>
          <Type />
        </h1>
      </div>
    </div>
  );
}

export default Home;
