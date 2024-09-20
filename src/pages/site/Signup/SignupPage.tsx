import { Component } from "solid-js";
import { Container, Title } from "./SignupPage.styled";
import SignupForm from "./components/SignupForm/SignupForm";

const SignupPage: Component = () => {
  return (
    <Container>
      <Title>新規登録</Title>
      <SignupForm />
    </Container>
  );
};

export default SignupPage;
