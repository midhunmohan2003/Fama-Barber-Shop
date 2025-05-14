import React from "react";
import "./testimonials.css";
import { Col, Container, Row, Card } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="text-warning d-flex align-items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalf && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} />
      ))}
      <span className="text-white-50 ms-2">
        ({rating.toFixed(1)} / 5 - 116+ reviews)
      </span>
    </div>
  );
}

function Testimonials() {
  return (
    <>
      <div className="testi-header-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <p className="section-title mb-3">Testimonials</p>
              <h3 className="section-subtitle underline-hover mb-4">
                What Our Clients Say
              </h3>
            </Col>
          </Row>
          
            <Container>
              <Row>
                <Col md={4} className="mb-4">
                  <Card className="testimonial-card h-100 p-3">
                    <Card.Body>
                      <p className="text-white-50 fst-italic">
                        “Great ambiance and friendly staff. The service was
                        good, but I feel it's a bit costly compared to other
                        barbershops offering better haircuts for a lower price.”
                      </p>
                      <h6 className="fw-bold mt-3 text-white">
                        — James Walker
                      </h6>
                      <StarRating rating={4.6} />
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} className="mb-4">
                  <Card className="testimonial-card h-100 p-3">
                    <Card.Body>
                      <p className="text-white-50 fst-italic">
                        “Been coming here for over a year. Consistent results
                        and great staff every time. Highly recommend for those
                        who value quality and service.”
                      </p>
                      <h6 className="fw-bold mt-3 text-white">— Maria Lopez</h6>
                      <StarRating rating={4.8} />
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} className="mb-4">
                  <Card className="testimonial-card h-100 p-3">
                    <Card.Body>
                      <p className="text-white-50 fst-italic">
                        “Excellent service and very clean shop. A bit of a wait
                        sometimes, but it’s worth it. The stylists are super
                        professional and skilled.”
                      </p>
                      <h6 className="fw-bold mt-3 text-white">— David Chen</h6>
                      <StarRating rating={4.5} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
        </Container>
      </div>
    </>
  );
}

export default Testimonials;
