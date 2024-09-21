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
  background-color: #ffc107;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0a800;
  }
`;

const ForgotPasswordForm: Component = () => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input type="email" placeholder="メールアドレス" required />
      <Button type="submit">パスワードリセットリンクを送信</Button>
    </Form>
  );
};

export default ForgotPasswordForm;
