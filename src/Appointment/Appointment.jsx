import React from "react";
import "./appointment.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Appointment() {
  return (
    <>
      <div id="appointment" className="book-header-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <p className="section-title mb-3">Book Your Appointment</p>
              <h3 className="section-subtitle underline-hover mb-4">
                Contact Us
              </h3>
              <p className="text text-white-custom">
                Ready for a fresh look? Book your appointment today or contact
                us for any questions.
              </p>
            </Col>
          </Row>

          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formService">
              <Form.Label>Service Interested In</Form.Label>
              <Form.Select  className="service-select">
                <option  selected>Select an option</option>
                <option  >Haircut</option>
                <option  >Coloring</option>
                <option  >Styling</option>
                <option  >Treatment</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control type="date" placeholder="dd-mm-yyyy" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Tell us about your style preferences or any questions you have"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Appointment;
