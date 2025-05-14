import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaPalette, FaGlobe, FaPhone } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="nav py-3" sticky="top">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEFb2Dg8g6JOknOQsmiShJzovYFUFZGKuhg&s"
              alt="Logo"
              height="40"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar" className="justify-content-between">
            <Nav className="mx-auto gap-4">
              <Nav.Link href="#home" className="btnHeader fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="btnHeader fw-bold">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="btnHeader fw-bold">
                Services
              </Nav.Link>
              <Nav.Link href="#gallery" className="btnHeader fw-bold">
                Gallery
              </Nav.Link>
              <Nav.Link href="#contact" className="btnHeader fw-bold">
                Contact
              </Nav.Link>
            </Nav>

            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center text-white fw-semibold">
                <FaPhone className="me-2" />
                +1 940-612-9127
              </div>

              <button
                className="btnBook fw-bold"
                onClick={() => {
                  const section = document.getElementById("appointment");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book an Appointment
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
