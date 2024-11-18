import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ display: 'inline-block', minWidth: '400px', textAlign: 'left' }}>
      <Typewriter
        options={{
          strings: ["Frontend Developer",
            "Passionate Learner",
            "Problem Solver"
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
