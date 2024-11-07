import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100 fixed-top" expanded={expanded}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-5">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={handleClose}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand as={Link} to="/" onClick={handleClose}>Dark/Light Mode</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
