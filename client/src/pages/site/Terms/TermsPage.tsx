import { Component } from "solid-js";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Paragraph,
} from "./TermsPage.styled";

const TermsPage: Component = () => {
  return (
    <Container>
      <Title>利用規約</Title>

      <Section>
        <SectionTitle>1. サービスの利用</SectionTitle>
        <Paragraph>
          本サービスを利用することにより、ユーザーは本規約に同意したものとみなされます。
          本サービスは、18歳以上の方のみご利用いただけます。
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. アカウント</SectionTitle>
        <Paragraph>
          ユーザーは、正確かつ最新の情報を用いてアカウントを作成し、維持する責任があります。
          アカウントの安全性を保つため、パスワードは定期的に変更し、他人と共有しないでください。
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. プライバシー</SectionTitle>
        <Paragraph>
          当社のプライバシーポリシーは、個人情報の収集、使用、開示に関する当社の方針を説明しています。
          本サービスを利用することにより、ユーザーは当社のプライバシーポリシーに同意したものとみなされます。
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. コンテンツ</SectionTitle>
        <Paragraph>
          ユーザーは、投稿するコンテンツに対して全責任を負います。
          違法、有害、脅迫的、虐待的、嫌がらせ、中傷的、卑猥、または他者のプライバシーを侵害するコンテンツの投稿は禁止されています。
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. サービスの変更と終了</SectionTitle>
        <Paragraph>
          当社は、事前の通知なしに本サービスの一部または全部を変更、停止、または終了する権利を有します。
          ユーザーは、いつでも自身のアカウントを削除することができます。
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. 免責事項</SectionTitle>
        <Paragraph>
          本サービスは「現状有姿」で提供され、当社は明示または黙示を問わず、いかなる保証も行いません。
          当社は、本サービスの利用に起因する直接的、間接的、偶発的、特別、結果的またはその他のいかなる損害に対しても責任を負いません。
        </Paragraph>
      </Section>

      <Paragraph>
        本規約は2023年4月1日に最終更新されました。当社は、必要に応じて本規約を変更する権利を有します。
        重要な変更がある場合は、ユーザーに通知いたします。
      </Paragraph>
    </Container>
  );
};

export default TermsPage;
