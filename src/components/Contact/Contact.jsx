import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData(event.target);
    fetch(event.target.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage('Email sent successfully!');
          event.target.reset(); // Reset the form
        } else {
          setErrorMessage('Failed to send email. Please try again later.');
        }
      })
      .catch(() => {
        setErrorMessage('Failed to send email. Please try again later.');
      });
  };

  return (
    <Container className="p-lg-5 p-md-3 p-sm-3 ms-lg-5 vh-100">
      <h1 className="text-start my-5 pt-5 bor-bottom">Contact Me</h1>
      <div className="contact-container">
        <h4>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</h4>
        <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" action="https://danutnanuportfolio.netlify.app/">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="form-control" 
              placeholder="Your email" 
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              className="form-control mt-2" 
              rows="5" 
              placeholder="Your message" 
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Send</button>
          {successMessage && <div className="alert alert-success mt-2">{successMessage}</div>}
          {errorMessage && <div className="alert alert-danger mt-2">{errorMessage}</div>}
        </form>
      </div>
    </Container>
  );
}

export default Contact;
