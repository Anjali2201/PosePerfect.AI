import React from "react";
import LandingPage from "../components/landingpage";
import AboutUs from "../components/aboutus";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Homepage;
