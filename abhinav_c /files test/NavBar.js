import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // Import Router components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './NavBar.css';

// HomeIcon component
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
  </svg>
);

// Home Page Component
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
};

// Main Navbar with React Router links
function NavBar() {
  return (
    <Router> {/* Wrap everything in Router */}
      <Navbar expand="lg" className="bg-dark mb-3 shadow-sm">
        <Container fluid>
          {/* Home icon and "Travon" brand */}
          <Navbar.Brand as={Link} to="/" className="text-orange d-flex align-items-center">
            <HomeIcon /> {/* Home Icon */}
            <span className="ms-2">Travon</span> {/* Spacing between icon and brand name */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="text-orange">
                Main Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* Use Link components for navigation */}
                <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-light">About Us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
