import { Component } from "solid-js";
import { useAuth } from "../../../../../hooks/useAuth";
import { Form, Input, Button } from "./SignupForm.styled";

const SignupForm: Component = () => {
  const { signUp } = useAuth();

  const handleSignup = async (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const user = await signUp(email, password);
      console.log("サインアップ成功:", user);
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error("サインアップエラー:", errorMessage);
    }
  };

  return (
    <Form onSubmit={handleSignup}>
      <Input type="email" name="email" placeholder="メールアドレス" required />
      <Input
        type="password"
        name="password"
        placeholder="パスワード"
        required
      />
      <Button type="submit">新規登録</Button>
    </Form>
  );
};

export default SignupForm;
