import { Component } from "solid-js";
import {
  FeaturesSection,
  FeatureCard,
  FeatureTitle,
  FeatureDescription,
} from "./Features.styled";

const Features: Component = () => {
  const featuresList = [
    {
      title: "簡易な情報発信ツール",
      description:
        "テンプレートを使って、簡単に店舗情報やお知らせを掲載できます。",
    },
    {
      title: "地域限定の求人・求職マッチング",
      description:
        "地域内の求人情報と求職者のプロフィールをマッチングさせます。",
    },
    // 他の機能も同様に追加
  ];

  return (
    <FeaturesSection>
      {featuresList.map((feature) => (
        <FeatureCard>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
        </FeatureCard>
      ))}
    </FeaturesSection>
  );
};

export default Features;
