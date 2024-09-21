import { Component } from "solid-js";
import { Container, Title } from "./AboutPage.styled";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import Initiatives from "./components/Initiatives";

const AboutPage: Component = () => {
  return (
    <Container>
      <Title>私たちについて</Title>
      <Mission />
      <Vision />
      <Initiatives />
    </Container>
  );
};

export default AboutPage;
