import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaClock,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-section py-5">
      <Container>
        <Row className="text-center text-md-start">
          {/* Logo and Contact Info */}
          <Col md={4} className="mb-4">
            <div className="d-flex gap-2 align-items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEFb2Dg8g6JOknOQsmiShJzovYFUFZGKuhg&s"
                height={"40px"}
                alt="logo"
              />
              <h5 className="text-light fw-bold mb-0 text-center text-md-start">
                Fama Barber Shop &  Beauty Salon
              </h5>
            </div>
            <p className="text-white-50 mt-3">
              500 N Bell Ave #109, Denton, TX 76209, United States
            </p>
            <p className="text-white-50">+1 940-612-9127</p>

          </Col>

          {/* Quick Links */}
          <Col md={2} className="mb-4">
            <h6 className="text-white fw-bolder">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Newsletter Signup */}
          <Col md={3} className="mb-4">
            <h6 className="text-white fw-bolder">Newsletter</h6>
            <p className="text-white-50 small">Subscribe to get latest updates:</p>
            <Form>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="mb-2"
              />
              <Button variant="success" size="sm" className="subscribeBtn w-100">
                Subscribe
              </Button>
            </Form>
          </Col>

          {/* Social Media Icons */}
          <Col md={3} className="mb-4">
            <h6 className="text-white fw-bolder">Follow Us</h6>
            <div className="social">
              <a href="#" className="social-icon text-secondary" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon text-secondary" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon text-secondary" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-white opacity-25 my-3" />

        <Row>
          <Col className="text-center text-white-50 small">
            &copy; {new Date().getFullYear()} Fama Barber Shop and Beauty Salon. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
