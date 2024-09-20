import { Component } from "solid-js";
import { Section, SectionTitle, Paragraph } from "../AboutPage.styled";

const Initiatives: Component = () => {
  return (
    <Section>
      <SectionTitle>私たちの取り組み</SectionTitle>
      <Paragraph>
        地域限定のSNSプラットフォームを通じて、以下の取り組みを行っています： -
        地域情報の共有と発信 - 地域内の求人・求職マッチング -
        地域イベントの告知と参加促進 - 地域課題の可視化と解決支援 -
        地域ビジネスの活性化支援
      </Paragraph>
    </Section>
  );
};

export default Initiatives;
