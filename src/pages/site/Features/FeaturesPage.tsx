import { Component, For } from "solid-js";
import { Container, Title } from "./FeaturesPage.styled";
import FeatureCard from "./components/FeatureCard";

const features = [
  {
    title: "地域限定の情報共有",
    description: "あなたの地域に特化した情報を簡単に共有・閲覧できます。",
  },
  {
    title: "ローカル求人マッチング",
    description:
      "地域内の求人情報と求職者をマッチングさせ、地域の雇用を促進します。",
  },
  {
    title: "イベント管理",
    description: "地域のイベントを簡単に告知・管理し、参加を促進します。",
  },
  {
    title: "地域課題解決プラットフォーム",
    description:
      "地域の課題を共有し、解決策を議論・実行するための場を提供します。",
  },
  {
    title: "ローカルビジネス支援",
    description:
      "地域の事業者向けの情報発信ツールと、顧客とのコミュニケーション機能を提供します。",
  },
];

const FeaturesPage: Component = () => {
  return (
    <Container>
      <Title>主な機能</Title>
      <For each={features}>
        {(feature) => (
          <FeatureCard
            title={feature.title}
            description={feature.description}
          />
        )}
      </For>
    </Container>
  );
};

export default FeaturesPage;
