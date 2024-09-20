import { Component } from "solid-js";
import { SupportSection, Title, Content } from "./Support.styled";

const Support: Component = () => {
  return (
    <SupportSection>
      <Title>サポート</Title>
      <Content>
        アクセシビリティに関するご質問やサポートが必要な場合は、
        お問い合わせフォームからご連絡ください。
        私たちは、すべてのユーザーが快適にサイトを利用できるよう
        サポートいたします。
      </Content>
    </SupportSection>
  );
};

export default Support;
