import { Component } from "solid-js";
import { Container } from "./HomePage.styled";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import CTA from "./components/CTA/CTA";

const HomePage: Component = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </Container>
  );
};

export default HomePage;
