import { Component } from "solid-js";
import { Container, Title, Separator, OrText } from "./SignupPage.styled";
import SignupForm from "./components/SignupForm/SignupForm";
import GoogleLoginButton from "../../../components/site/GoogleLoginButton/GoogleLoginButton";

const SignupPage: Component = () => {
  return (
    <Container>
      <Title>新規登録</Title>
      <SignupForm />
      <Separator>
        <OrText>または</OrText>
      </Separator>
      <GoogleLoginButton />
    </Container>
  );
};

export default SignupPage;
