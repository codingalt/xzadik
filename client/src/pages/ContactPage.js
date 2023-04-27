import React from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

const ContactPage = () => {
  const heroTxt = 'Contact me below.';
  const slogan = 'Need to get in touch? Or just have a chat?'
  return (
    <>
      <Navbar />
      <Hero heroTxt={heroTxt} slogan={slogan} />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
