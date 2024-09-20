import { Component } from "solid-js";
import { PolicySection, Title, Content } from "./Policy.styled";

const Policy: Component = () => {
  return (
    <PolicySection>
      <Title>アクセシビリティ方針</Title>
      <Content>
        当サイトは、ウェブアクセシビリティの向上に努めています。
        私たちは、障害の有無にかかわらず、すべての人々が平等に情報にアクセスし、
        サービスを利用できるよう取り組んでいます。
      </Content>
    </PolicySection>
  );
};

export default Policy;
