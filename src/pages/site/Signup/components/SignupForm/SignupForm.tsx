import { Component } from "solid-js";
import { styled } from "solid-styled-components";

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
`;

const Input = styled("input")`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled("button")`
  padding: 0.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const SignupForm: Component = () => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input type="text" placeholder="ユーザー名" required />
      <Input type="email" placeholder="メールアドレス" required />
      <Input type="password" placeholder="パスワード" required />
      <Input type="password" placeholder="パスワード（確認）" required />
      <Button type="submit">新規登録</Button>
    </Form>
  );
};

export default SignupForm;
