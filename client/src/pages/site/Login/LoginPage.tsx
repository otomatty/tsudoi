import { Component } from "solid-js";
import { Container, Title, Separator, OrText } from "./LoginPage.styled";
import LoginForm from "./components/LoginForm/LoginForm";
import GoogleLoginButton from "../../../components/site/GoogleLoginButton/GoogleLoginButton";

const LoginPage: Component = () => {
  return (
    <Container>
      <Title>ログイン</Title>
      <LoginForm />
      <Separator>
        <OrText>または</OrText>
      </Separator>
      <GoogleLoginButton />
    </Container>
  );
};

export default LoginPage;
