import { Component } from "solid-js";
import { FeedbackSection, Title, Content } from "./Feedback.styled";

const Feedback: Component = () => {
  return (
    <FeedbackSection>
      <Title>フィードバック</Title>
      <Content>
        当サイトのアクセシビリティに関するフィードバックをお寄せください。
        皆様のご意見は、サイトの改善に役立てさせていただきます。
        フィードバックは、お問い合わせフォームからお送りいただけます。
      </Content>
    </FeedbackSection>
  );
};

export default Feedback;
