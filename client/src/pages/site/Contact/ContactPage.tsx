import { Component } from "solid-js";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from "./ContactPage.styled";

const ContactPage: Component = () => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // ここにフォーム送信のロジックを実装
    console.log("フォームが送信されました");
  };

  return (
    <Container>
      <Title>お問い合わせ</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          お名前
          <Input type="text" name="name" required />
        </Label>
        <Label>
          メールアドレス
          <Input type="email" name="email" required />
        </Label>
        <Label>
          件名
          <Input type="text" name="subject" required />
        </Label>
        <Label>
          メッセージ
          <TextArea name="message" required />
        </Label>
        <SubmitButton type="submit">送信</SubmitButton>
      </Form>
    </Container>
  );
};

export default ContactPage;
