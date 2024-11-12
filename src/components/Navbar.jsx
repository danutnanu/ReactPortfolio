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
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-5 fs-4">
            <Nav.Link as={Link} to="/" onClick={handleClose} className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose} className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={handleClose} className="nav-link">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose} className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button onClick={toggleTheme} className="btn btn-outline-secondary">
          {darkMode ? '🌔' : '🌘'} 
        </button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
