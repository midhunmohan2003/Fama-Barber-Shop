import React from "react";
import "./home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <div id="home" className="home-section text-light">
        <Container>
          <Row className="row align-items-center mt-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="main-heading">Classic Cuts, Modern Style</h1>
              <h2 className="sub-heading">Premium Barber Shop</h2>
              <p className="description">
                At Fama Barber Shop, we combine traditional barbering techniques
                with modern styling to give you the perfect look. Our
                experienced barbers deliver precision cuts, beard grooming, and
                relaxing hot towel shaves in a classic barbershop atmosphere.
              </p>
              <button className="location-box">
                <FaMapMarkerAlt className="me-2" />
                Denton, US
              </button>
              <div className="button-group mt-3">
                <Button variant="dark" className="me-3 custom-dark-btn">
                  <FaPhone className="me-2" />
                  Our Services
                </Button>
                <Button className="bookBtn text-white fw-bold">
                  <FaArrowRight className="me-2" />
                  Book Now
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src="https://media.istockphoto.com/id/1034245322/photo/handsome-bearded-man-at-the-barbershop-barber-at-work.jpg?s=612x612&w=0&k=20&c=wTk21iExAQZB_S6wuNzqwDgl-uJqdWMZ0wVv-M3TUHc="
                alt="Barber Team"
                className="img-fluid rounded hover-zoom"
              />
            </Col>
          </Row>
          <a href="#about" className="scroll-down-icon">
            <FaChevronDown />
          </a>
        </Container>
      </div>
    </>
  );
}

export default Home;
