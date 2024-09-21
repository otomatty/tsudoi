import { Component, For } from "solid-js";
import {
  ComparisonTable,
  TableHeader,
  TableRow,
  TableCell,
  PlanName,
  FeatureName,
  CheckMark,
} from "./PlanComparison.styled";

const plans = [
  {
    name: "無料プラン",
    price: "¥0/月",
    features: ["基本機能", "地域情報閲覧", "プロフィール作成"],
  },
  {
    name: "スタンダードプラン",
    price: "¥980/月",
    features: [
      "無料プランの全機能",
      "広告なし",
      "高度な検索機能",
      "イベント作成",
    ],
  },
  {
    name: "プレミアムプラン",
    price: "¥1,980/月",
    features: [
      "スタンダードプランの全機能",
      "優先サポート",
      "アナリティクス",
      "カスタムドメイン",
    ],
  },
];

const allFeatures = Array.from(new Set(plans.flatMap((plan) => plan.features)));

const PlanComparison: Component = () => {
  return (
    <ComparisonTable>
      <TableHeader>
        <TableRow>
          <TableCell>機能</TableCell>
          <For each={plans}>
            {(plan) => (
              <PlanName>
                {plan.name}
                <br />
                {plan.price}
              </PlanName>
            )}
          </For>
        </TableRow>
      </TableHeader>
      <tbody>
        <For each={allFeatures}>
          {(feature) => (
            <TableRow>
              <FeatureName>{feature}</FeatureName>
              <For each={plans}>
                {(plan) => (
                  <TableCell>
                    {plan.features.includes(feature) && (
                      <CheckMark>✓</CheckMark>
                    )}
                  </TableCell>
                )}
              </For>
            </TableRow>
          )}
        </For>
      </tbody>
    </ComparisonTable>
  );
};

export default PlanComparison;
