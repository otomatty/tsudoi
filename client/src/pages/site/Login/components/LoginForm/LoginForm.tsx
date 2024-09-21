import { Component } from "solid-js";
import { useAuth } from "../../../../../hooks/useAuth";
import { Form, Input, Button } from "./LoginForm.styled";

const LoginForm: Component = () => {
  const { signIn } = useAuth();

  const handleLogin = async (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const session = await signIn(email, password);
      console.log("ログイン成功:", session);
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error("ログインエラー:", errorMessage);
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Input type="email" name="email" placeholder="メールアドレス" required />
      <Input
        type="password"
        name="password"
        placeholder="パスワード"
        required
      />
      <Button type="submit">ログイン</Button>
    </Form>
  );
};

export default LoginForm;
