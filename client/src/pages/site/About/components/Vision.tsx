import { Component } from "solid-js";
import { Section, SectionTitle, Paragraph } from "../AboutPage.styled";

const Vision: Component = () => {
  return (
    <Section>
      <SectionTitle>ビジョン</SectionTitle>
      <Paragraph>
        すべての地域が活気に満ち、住民同士が助け合い、地域の魅力を最大限に引き出す社会を目指します。
        私たちのプラットフォームを通じて、人々が地域の課題を共有し、解決策を見出す場を提供します。
      </Paragraph>
    </Section>
  );
};

export default Vision;
