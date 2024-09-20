import { Component } from "solid-js";
import { Container, Title } from "./LoginPage.styled";
import LoginForm from "./components/LoginForm/LoginForm";

const LoginPage: Component = () => {
  return (
    <Container>
      <Title>ログイン</Title>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
