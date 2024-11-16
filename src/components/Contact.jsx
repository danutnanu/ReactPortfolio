import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </p>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="button-container">
            <a href="mailto:example@example.com" className="btn email-btn">Email</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn linkedin-btn">LinkedIn</a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
