import React from "react";
import "./service.css";
import { Card, Col, Container, Row } from "react-bootstrap";

function Service() {
  return (
    <>
      <div id="services" className="service-header-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <p className="section-title mb-3">Premium Grooming</p>
              <h3 className="section-subtitle underline-hover mb-4">
                Our Barber Services
              </h3>
              <p className="text text-white-custom">
                Professional barbering services to keep you looking sharp for
                everyday confidence or special <br /> occasions.
              </p>
            </Col>
          </Row>

          <Row className="mt-4 gx-4 gy-4">
            {/* Card 1 */}
            <Col xs={12} md={6} lg={4}>
              <Card className="haircut-card h-100 text-center p-3">
                <Card.Body>
                  <div className="icon-card mb-3">
                    <img
                      src="https://pmcbarber.devfrend.com/images/salonCommon/hair-styling-icon.svg"
                      alt=""
                      height="50"
                    />
                  </div>
                  <Card.Title className="fw-bold mb-3">Haircuts</Card.Title>
                  <Card.Text className="card-description">
                    Our skilled barbers deliver precision haircuts tailored to
                    your style and face shape. From classic cuts to modern
                    fades, we ensure you leave looking sharp and confident.
                  </Card.Text>
                  <ul className="service-list text-start">
                    <li>• Classic Cuts</li>
                    <li>• Modern Styles</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col xs={12} md={6} lg={4}>
              <Card className="haircut-card h-100 text-center p-3">
                <Card.Body>
                  <div className="icon-card mb-3">
                    <img
                      src="https://pmcbarber.devfrend.com/images/salonCommon/makeup-icon.svg"
                      alt=""
                      height="50"
                    />
                  </div>
                  <Card.Title className="fw-bold mb-3">Beard Service</Card.Title>
                  <Card.Text className="card-description">
                    Maintain your facial hair with our premium beard services.
                    We specialize in perfect beard shaping, precise trims, and
                    luxurious hot towel shaves.
                  </Card.Text>
                  <ul className="service-list text-start">
                    <li>• Beard Shaping</li>
                    <li>• Hot Towel Shaves</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col xs={12} md={6} lg={4}>
              <Card className="haircut-card h-100 text-center p-3">
                <Card.Body>
                  <div className="icon-card mb-3">
                    <img
                      src="https://pmcbarber.devfrend.com/images/salonCommon/skincare-icon.svg"
                      alt=""
                      height="50"
                    />
                  </div>
                  <Card.Title className="fw-bold mb-3">
                    Premium Services
                  </Card.Title>
                  <Card.Text className="card-description">
                    Enhance your look with expert hair coloring, revitalizing
                    scalp treatments, and styling for special occasions.
                  </Card.Text>
                  <ul className="service-list text-start">
                    <li>• Hair Coloring</li>
                    <li>• Scalp Treatments</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Service;
