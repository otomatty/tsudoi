import { Component } from "solid-js";
import { Form, Input, Button, Divider } from "./LoginForm.styled";
import GoogleLoginButton from "../../../../../components/site/GoogleLoginButton/GoogleLoginButton";

const LoginForm: Component = () => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // 通常のログイン処理
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="email" placeholder="メールアドレス" required />
      <Input type="password" placeholder="パスワード" required />
      <Button type="submit">ログイン</Button>
      <Divider>または</Divider>
      <GoogleLoginButton />
    </Form>
  );
};

export default LoginForm;
