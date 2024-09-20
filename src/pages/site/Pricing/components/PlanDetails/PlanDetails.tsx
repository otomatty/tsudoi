import { Component, For } from "solid-js";
import {
  PlanContainer,
  PlanCard,
  PlanName,
  PlanPrice,
  FeatureList,
  Feature,
} from "./PlanDetails.styled";

const plans = [
  {
    name: "無料プラン",
    price: "¥0/月",
    features: [
      "基本的な地域情報の閲覧",
      "個人プロフィールの作成",
      "限定的なコミュニティ参加",
      "広告表示あり",
    ],
  },
  {
    name: "スタンダードプラン",
    price: "¥980/月",
    features: [
      "無料プランの全機能",
      "広告表示なし",
      "高度な検索機能",
      "イベント作成と管理",
      "地域ビジネスページの作成",
    ],
  },
  {
    name: "プレミアムプラン",
    price: "¥1,980/月",
    features: [
      "スタンダードプランの全機能",
      "優先カスタマーサポート",
      "詳細なアナリティクス",
      "カスタムドメイン設定",
      "API アクセス",
      "高度なセキュリティ機能",
    ],
  },
];

const PlanDetails: Component = () => {
  return (
    <PlanContainer>
      <For each={plans}>
        {(plan) => (
          <PlanCard>
            <PlanName>{plan.name}</PlanName>
            <PlanPrice>{plan.price}</PlanPrice>
            <FeatureList>
              <For each={plan.features}>
                {(feature) => <Feature>{feature}</Feature>}
              </For>
            </FeatureList>
          </PlanCard>
        )}
      </For>
    </PlanContainer>
  );
};

export default PlanDetails;
