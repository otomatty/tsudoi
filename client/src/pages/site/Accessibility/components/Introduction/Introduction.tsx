import { Component } from "solid-js";
import { IntroductionSection, Title, Content } from "./Introduction.styled";

const Introduction: Component = () => {
  return (
    <IntroductionSection>
      <Title>はじめに</Title>
      <Content>
        私たちは、すべてのユーザーが快適に利用できるウェブサイトを目指しています。
        このページでは、当サイトのアクセシビリティに関する取り組みについて説明します。
      </Content>
    </IntroductionSection>
  );
};

export default Introduction;
