import { Component } from "solid-js";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Paragraph,
} from "./PrivacyPage.styled";

const PrivacyPage: Component = () => {
  return (
    <Container>
      <Title>プライバシーポリシー</Title>

      <Paragraph>
        本プライバシーポリシーは、当社のサービス利用における個人情報の取り扱いについて説明します。
        本サービスを利用することで、ユーザーは本ポリシーに同意したものとみなされます。
      </Paragraph>

      <Section>
        <SectionTitle>1. 収集する情報</SectionTitle>
        <Paragraph>
          当社は、以下の情報を収集する場合があります： -
          アカウント作成時に提供される情報（氏名、メールアドレス、生年月日など）
          - プロフィール情報（居住地域、興味関心など） -
          サービス利用履歴（投稿内容、閲覧履歴など） -
          デバイス情報（IPアドレス、ブラウザの種類など）
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. 情報の利用目的</SectionTitle>
        <Paragraph>
          収集した情報は、以下の目的で利用されます： - サービスの提供と改善 -
          ユーザーサポート - 個別化されたコンテンツの提供 -
          マーケティングおよび広告 - 法的義務の遵守
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. 情報の共有</SectionTitle>
        <Paragraph>
          当社は、以下の場合を除き、ユーザーの個人情報を第三者と共有しません： -
          ユーザーの同意がある場合 - 法的要請に応じる必要がある場合 -
          サービス提供に必要な外部パートナーとの共有（これらのパートナーは当社のプライバシー基準に従うことが求められます）
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. データセキュリティ</SectionTitle>
        <Paragraph>当社は、</Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. ユーザーの権利</SectionTitle>
        <Paragraph>ユーザーは以下の権利を有します：</Paragraph>
      </Section>
    </Container>
  );
};

export default PrivacyPage;
