import { Component } from "solid-js";
import { Container, Title } from "./ForgotPasswordPage.styled";
import ForgotPasswordForm from "./components/ForgotPasswordForm/ForgotPasswordForm";

const ForgotPasswordPage: Component = () => {
  return (
    <Container>
      <Title>パスワードをお忘れの方</Title>
      <ForgotPasswordForm />
    </Container>
  );
};

export default ForgotPasswordPage;
