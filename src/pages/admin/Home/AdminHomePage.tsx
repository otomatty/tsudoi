import { Component } from "solid-js";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Paragraph,
} from "./AdminHomePage.styled";

const AdminHomePage: Component = () => {
  return (
    <Container>
      <Title>管理者ダッシュボード</Title>
      <Section>
        <SectionTitle>概要</SectionTitle>
        <Paragraph>ここでは、サイトの管理タスクを実行できます。</Paragraph>
      </Section>
      <Section>
        <SectionTitle>最近のアクティビティ</SectionTitle>
        <Paragraph>
          最近のユーザーアクティビティや重要な統計情報がここに表示されます。
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>クイックアクション</SectionTitle>
        <Paragraph>
          よく使用する管理タスクへのクイックリンクがここに表示されます。
        </Paragraph>
      </Section>
    </Container>
  );
};

export default AdminHomePage;
