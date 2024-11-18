import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'; 

function Contact() {
  return (
    <Container className="p-lg-5 p-md-3 p-sm-3 ms-lg-5 vh-100">
      <h1 className="text-start my-5 pt-5 bor-bottom">Contact Me</h1>

      <div className="contact-container">
        <h4>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </h4>
        <div className="contact-details">
          <div className="button-container d-flex justify-content-center">
            <a href="mailto:danutnanu@icloud.com" className="btn email-btn">Email</a>
            <a href="https://www.linkedin.com/in/danut-nanu-7474b4267/" target="_blank" rel="noopener noreferrer" className="btn linkedin-btn">LinkedIn</a>
            <a href="https://github.com/danutnanu" target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
          </div>
        </div>
      </div>
      <p className="text-start my-5 pt-5 bor-bottom"></p>
    </Container>
  );
}

export default Contact;
