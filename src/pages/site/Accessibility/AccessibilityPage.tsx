import { Component } from "solid-js";
import { Container, Title } from "./AccessibilityPage.styled";
import Introduction from "./components/Introduction/Introduction";
import Policy from "./components/Policy/Policy";
import Standards from "./components/Standards/Standards";
import Features from "./components/Features/Features";
import Support from "./components/Support/Support";
import Feedback from "./components/Feedback/Feedback";

const AccessibilityPage: Component = () => {
  return (
    <Container>
      <Title>アクセシビリティ</Title>
      <Introduction />
      <Policy />
      <Standards />
      <Features />
      <Support />
      <Feedback />
    </Container>
  );
};

export default AccessibilityPage;
