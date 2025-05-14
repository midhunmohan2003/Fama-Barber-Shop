import React from 'react'
import './prices.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { TiTick } from "react-icons/ti";


function Prices() {
  return (
    <>
      <div className='prices-header-section py-5'>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <p className="section-title mb-3">Quality Barbering at Fair Prices</p>
              <h3 className="section-subtitle underline-hover mb-4">
                Our Service Prices
              </h3>
              <p className="text text-white-custom">
                Choose from our range of professional barbering services.
              </p>
            </Col>
          </Row>

          {/* Cards Row */}
          <Row className="justify-content-center g-4">
            {/* Classic Services Card */}
            <Col md={6} lg={4}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title className="service-title">Classic Services</Card.Title>
                  <div className="price-section">
                    <span className="price-currency">$</span>
                    <span className="price-amount">25</span>
                    <span className="price-period">/mo</span>
                  </div>
                  <ul className="service-list">
                    <li><TiTick className="tick-icon" />Men's Haircut</li>
                    <li><TiTick className="tick-icon" />Kids Haircut (12 & under)</li>
                    <li><TiTick className="tick-icon" />Senior Haircut (65+)</li>
                    <li><TiTick className="tick-icon" />Military/First Responder Cut</li>
                    <li><TiTick className="tick-icon" />Basic Beard Trim</li>
                    <li><TiTick className="tick-icon" />Neck & Line Cleanup (between cuts)</li>
                  </ul>
                  <div className="divider"></div>
                  <Button variant="dark" className="book-btn">Book Now</Button>
                  <div className="divider"></div>
                </Card.Body>
              </Card>
            </Col>

            {/* Premium Services Card */}
            <Col md={6} lg={4}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title className="service-title">Premium Services</Card.Title>
                  <div className="price-section">
                    <span className="price-currency">$</span>
                    <span className="price-amount">35</span>
                    <span className="price-period">/mo</span>
                  </div>
                  <ul className="service-list">
                    <li><TiTick className="tick-icon" />Haircut & Beard Combo</li>
                    <li><TiTick className="tick-icon" />Hot Towel Shave</li>
                    <li><TiTick className="tick-icon" />Full Beard Shaping & Design</li>
                    <li><TiTick className="tick-icon" />Color Camo (Gray Blending)</li>
                    <li><TiTick className="tick-icon" />Hair & Scalp Treatment</li>
                    <li><TiTick className="tick-icon" />Head Shave with Hot Towel</li>
                  </ul>
                  <div className="divider"></div>
                  <Button variant="dark" className="book-btn">Book Now</Button>
                  <div className="divider"></div>
                </Card.Body>
              </Card>
            </Col>

            {/* Packages Card */}
            <Col md={6} lg={4}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title className="service-title">Packages</Card.Title>
                  <div className="price-section">
                    <span className="price-currency">$</span>
                    <span className="price-amount">50</span>
                    <span className="price-period">/mo</span>
                  </div>
                  <ul className="service-list">
                    <li><TiTick className="tick-icon" />The Works (Cut, Shave, Treatment)</li>
                    <li><TiTick className="tick-icon" />Father & Son Combo</li>
                    <li><TiTick className="tick-icon" />Groom's Package</li>
                    <li><TiTick className="tick-icon" />Monthly Membership (2 cuts/mo)</li>
                    <li><TiTick className="tick-icon" />First-Time Client Special</li>
                    <li><TiTick className="tick-icon" />Loyalty Program</li>
                  </ul>
                  <div className="divider"></div>
                  <Button variant="dark" className="book-btn">Book Now</Button>
                  <div className="divider"></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Prices
