import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Navigation({ toggleTheme, darkMode }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <Navbar 
      expand="lg" 
      className={`w-100 fixed-top ${darkMode ? 'bg-dark' : 'custom-light-bg'}`}
      expanded={expanded}
    >
      <Container>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className="order-1 ms-2 me-2" />
          <span className="badge text-bg-light p-1 ms-2 border border-warning order-2 d-lg-none">Portfolio</span>
          <span className="badge text-bg-light p-1 border border-warning order-0 d-none d-lg-inline">Portfolio</span>
          <button onClick={toggleTheme} className="btn btn-outline-secondary order-3 ms-4 me-2 d-lg-none">
            {darkMode ? '🌔' : '🌘'} 
          </button>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5 fs-4 align-items-center">
            <Nav.Link as={Link} to="/" onClick={handleClose} className="nav-link">home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose} className="nav-link">about</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={handleClose} className="nav-link">projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose} className="nav-link">contact</Nav.Link>
            <button onClick={toggleTheme} className="btn btn-outline-secondary d-none d-lg-block">
              {darkMode ? '🌔' : '🌘'} 
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
