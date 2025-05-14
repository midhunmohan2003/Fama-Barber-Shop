import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Service from "./ServicesSide/Service";
import Commitment from "./Commitment/Commitment";
import Prices from "./Prices/Prices";
import Gallery from "./Gallery/Gallery";
import Visit from "./Visit/Visit";
import Footer from "./Footer/Footer";
import Testimonials from "./Testimonials/Testimonials";
import Appointment from "./Appointment/Appointment";

function LandingPage() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service/>
      <Commitment/>
      <Prices/>
      <Testimonials/>
      <Gallery/>
      <Appointment/>
      <Visit/>
      <Footer/>
    </>
  );
}

export default LandingPage;
