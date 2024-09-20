import { Component } from "solid-js";
import { Section, SectionTitle, Paragraph } from "../AboutPage.styled";

const Mission: Component = () => {
  return (
    <Section>
      <SectionTitle>ミッション</SectionTitle>
      <Paragraph>
        私たちの使命は、地域コミュニティを活性化し、人々をつなげることです。
        テクノロジーの力を借りて、地域の絆を深め、情報共有を促進し、地域経済の発展に貢献します。
      </Paragraph>
    </Section>
  );
};

export default Mission;
