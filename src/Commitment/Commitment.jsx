import React from "react";
import "./commitment.css";
import { Card, Col, Container, Row } from "react-bootstrap";

function Commitment() {
  return (
    <>
      <div className="service-header-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <p className="section-title mb-3">Our Commitment</p>
              <h3 className="section-subtitle underline-hover mb-4">
                Why Choose Fama Barbershop?
              </h3>
              <p className="text text-white-custom">
                What makes us the premier barbershop in Denton, US.
              </p>
            </Col>
          </Row>

          <Row className="mt-4 gx-4 gy-4">
            {/* Card 1 */}
            <Col xs={12} md={6} lg={4}>
              <Card className="haircut-card h-100 text-center p-3">
                <Card.Body>
                  <div className="icon-cards icon-circle mb-3">
                    <h6 className="textCard">User</h6>
                  </div>
                  <Card.Title className="fw-bold mb-3">Expert Barbers</Card.Title>
                  <Card.Text className="card-description">
                    Our team consists of certified barbers with years of
                    experience in classic and modern cutting techniques, beard
                    grooming, and men's styling.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col xs={12} md={6} lg={4}>
              <Card className="haircut-card h-100 text-center p-3">
                <Card.Body>
                  <div className="icon-cards icon-circle mb-3">
                    <h6 className="textCard">Scissors</h6>
                  </div>
                  <Card.Title className="fw-bold mb-3">
                    Premium Tools & Products
                  </Card.Title>
                  <Card.Text className="card-description">
                    We use only high-quality barbering tools and premium men's
                    grooming products to ensure the best results for your hair
                    and skin.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col xs={12} md={6} lg={4}>
              <Card className="haircut-card h-100 text-center p-3">
                <Card.Body>
                  <div className="icon-cards icon-circle mb-3">
                    <h6 className="textCard">Home</h6>
                  </div>
                  <Card.Title className="fw-bold mb-3">
                    Classic Barbershop Experience
                  </Card.Title>
                  <Card.Text className="card-description">
                    Enjoy a comfortable, clean shop with a classic barbershop
                    atmosphere where you can relax while getting a great cut or
                    shave.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Commitment;
