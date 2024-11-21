import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  const emailAddress = "danutnanu@icloud.com"; // Your email address
  const subject = "Contact Form Submission"; // Subject for the email
  const body = "Hello,\n\n"; // Default body text

  return (
    <Container className="p-lg-5 p-md-3 p-sm-3 ms-lg-5 vh-100">
      <h1 className="text-start my-5 pt-5 bor-bottom">Contact Me</h1>
      <div className="contact-container">
        <h4>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</h4>
        <div className="button-container d-flex justify-content-center">
          <a
            href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="btn email-btn"
          >
            Email
          </a>
          <a href="https://www.linkedin.com/in/danut-nanu-7474b4267/" target="_blank" rel="noopener noreferrer" className="btn linkedin-btn">LinkedIn</a>
          <a href="https://github.com/danutnanu" target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
        </div>
      </div>
      <p className="bor-bottom mb-1 py-4"></p>
    </Container>
  );
}

export default Contact;
