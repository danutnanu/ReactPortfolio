import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect'; // Adjust the path if needed

function Home() {
  const text = 'Welcome to My Portfolio';
  const typingText = useTypingEffect(text, 100);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-center">
      <div>
        <h1>{typingText}</h1>
        <p>text111</p>
      </div>
    </div>
  );
}

export default Home;
