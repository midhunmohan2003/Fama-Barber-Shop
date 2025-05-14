import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
useEffect(() => {
  const targets = document.querySelectorAll(".about-section *");

  gsap.set(targets, { opacity: 0, y: 30 }); 

  const animation = gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  // Force recalculation on reload
  ScrollTrigger.refresh();

  return () => {
    animation.scrollTrigger?.kill();
    animation.kill();
  };
}, []);


  return (
    <div id="about" className="about-section py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <p className="section-title mb-3">Our Story</p>
            <h3 className="section-subtitle underline-hover mb-4">
              About Fama Barbershop
            </h3>

            <p className="text text-white-custom">
              Established in 2018, Fama Barbershop has been providing premium
              grooming services to the men of Denton, US. Our mission is to
              deliver exceptional haircuts and grooming services in a welcoming,
              classic barbershop environment.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <div className="image-zoom-container">
              <img
                src="https://cdn1.treatwell.net/images/view/v2.i8249290.w1080.h720.x4A77522C/"
                alt="PMC Barbershop"
                className="img-fluid rounded shadow-sm zoom-img"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </div>
          </Col>

          <Col md={6}>
            <p className="text text-white-custom paragraph-with-line mb-4">
              Established in 2018, Fama Barbershop has been providing premium
              grooming services to the men of Denton, US. Our mission is to
              deliver exceptional haircuts and grooming services in a welcoming,
              classic barbershop environment.
            </p>
            <br />
            <div className="card text-white shadow-sm">
              <div className="card-body p-4">
                <p className="text text-white-customCard card-text mb-0 hover-effect">
                  <span className="quote">"</span> We take pride in our
                  attention to detail and personalized service, ensuring each
                  client leaves looking and feeling their best. Our skilled
                  barbers combine traditional techniques with modern trends to
                  create custom styles that suit each individual's personality
                  and lifestyle.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
