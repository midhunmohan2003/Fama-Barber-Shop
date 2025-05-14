import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaDirections,
  FaClock,
} from "react-icons/fa";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./visit.css";

function Visit() {
  return (
    <>
      <div id="contact" className="visit-header-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <p className="section-title mb-3">Visit Our Shop</p>
              <h3 className="section-subtitle underline-hover mb-4">
                Our Location
              </h3>
              <p className="text text-white-custom">
                Conveniently located in Denton, US:
              </p>
            </Col>
          </Row>

          {/* Contact Info Section */}
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="contact-card p-4 ">
                <h5 className="mb-4 text-center text-light fw-bolder">
                  Contact Information
                </h5>

                {/* Address */}
                <div className="d-flex align-items-start mb-3">
                  <div className="icon-circle">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div className="ms-3 text-white-custom">
                    <p className="mb-1 fw-semibold text-light">Address:</p>
                    <p className="mb-0">
                      500 N Bell Ave #109, Denton, TX 76209, United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-start mb-3">
                  <div className="icon-circle">
                    <FaPhoneAlt className="text-white" />
                  </div>
                  <div className="ms-3 text-white-custom">
                    <p className="mb-1 fw-semibold text-light">Phone:</p>
                    <p className="mb-0">+1 940-612-9127</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="d-flex align-items-start mb-3">
                  <div className="icon-circle">
                    <FaClock className="text-white" />
                  </div>
                  <div className="ms-3 text-white-custom">
                    <p className="mb-2 fw-semibold text-light">
                      Business Hours
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <strong>Monday – Friday:</strong> 9:00 AM – 7:00 PM
                      </li>
                      <li>
                        <strong>Saturday:</strong> 9:00 AM – 5:00 PM
                      </li>
                      <li>
                        <strong>Sunday:</strong> Closed
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Buttons Row */}
                <Row className="mt-4">
                  <Col xs={6} className="text-center">
                    <a
                      href="https://www.google.com/maps?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209,+USA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn get-directions-btn w-100 fw-semibold"
                    >
                      <FaDirections className="me-2" />
                      Get Directions
                    </a>
                  </Col>

                  <Col xs={6} className="text-center">
                    <a
                      href="tel:+19406129127"
                      className="btn call-us-btn w-100 fw-semibold"
                    >
                      <FaPhoneAlt className="me-2" />
                      Call Us
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Visit;
