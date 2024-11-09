import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ display: 'inline-block', minWidth: '400px', textAlign: 'left' }}>
      <Typewriter
        options={{
          strings: ["React Developer",
            "Frontend Developer",
            "Freelancer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
