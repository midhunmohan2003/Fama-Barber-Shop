import React, { useState } from "react";
import "./gallery.css";
import { Card, Col, Container, Row, Modal, Button } from "react-bootstrap";

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [zoomImage, setZoomImage] = useState("");

  const handleShowModal = (imageSrc) => {
    setModalImage(imageSrc);
    setShowModal(true);
    setZoomImage(imageSrc);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div id="gallery" className="prices-header-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <p className="section-title mb-3">Our Work & Shop</p>
              <h3 className="section-subtitle underline-hover mb-4">
                Our Barbershop Gallery
              </h3>
              <p className="text text-white-custom">
                Take a look at our shop atmosphere and the quality cuts we
                deliver to our clients.
              </p>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="image-card">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/id/1677718095/photo/young-man-having-a-haircut-at-barber-shop.jpg?s=612x612&w=0&k=20&c=4tZJsoLn1zdNZXzFWKtnC1KpPk-b-zBsw5R2HbV6QUw="
                    alt="Image 1"
                    className="card-img"
                  />
                  <div
                    className="overlay"
                    onClick={() =>
                      handleShowModal(
                        "https://media.istockphoto.com/id/1677718095/photo/young-man-having-a-haircut-at-barber-shop.jpg?s=612x612&w=0&k=20&c=4tZJsoLn1zdNZXzFWKtnC1KpPk-b-zBsw5R2HbV6QUw="
                      )
                    }
                  >
                    <span className="view-button">View</span>
                  </div>
                </div>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="image-card">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src="https://cdn1.treatwell.net/images/view/v2.i8249291.w1080.h720.x9E06C933/"
                    alt="Image 2"
                     className="card-img"
                  />
                  <div
                    className="overlay"
                    onClick={() =>
                      handleShowModal(
                        "https://cdn1.treatwell.net/images/view/v2.i8249291.w1080.h720.x9E06C933/"
                      )
                    }
                  >
                    <span className="view-button">View</span>
                  </div>
                </div>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="image-card">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHNhbG9ufGVufDB8fDB8fHww"
                    alt="Image 3"
                    className="card-img"
                  />
                  <div
                    className="overlay"
                    onClick={() =>
                      handleShowModal(
                        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHNhbG9ufGVufDB8fDB8fHww"
                      )
                    }
                  >
                    <span className="view-button">View</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal for showing full-size image */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Body>
          <img src={modalImage} alt="Full Size" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          {/* Close button as "X" shape */}
          <Button variant="link" className="close-modal-btn" onClick={handleCloseModal}>
            <span className="close-icon">×</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Gallery;
