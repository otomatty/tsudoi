import { Component, For } from "solid-js";
import {
  CaseStudiesContainer,
  CaseStudyCard,
  CaseStudyTitle,
  CaseStudyContent,
  CustomerName,
  CustomerQuote,
} from "./CaseStudies.styled";

const caseStudies = [
  {
    title: "地域イベントの活性化",
    content:
      "当サービスを利用して地域イベントの告知と参加者募集を行ったところ、前年比150%の集客に成功しました。",
    name: "山田 太郎",
    quote:
      "地域の人々とつながる新しい方法を見つけました。イベントの成功は、このプラットフォームのおかげです。",
  },
  {
    title: "地元企業の売上向上",
    content:
      "プレミアムプランを利用して地域限定の広告を出したところ、新規顧客が30%増加し、売上が大幅に向上しました。",
    name: "佐藤 花子",
    quote:
      "地域に根ざしたマーケティングの効果は絶大でした。このサービスは私たちのビジネスに不可欠です。",
  },
];

const CaseStudies: Component = () => {
  return (
    <CaseStudiesContainer>
      <For each={caseStudies}>
        {(study) => (
          <CaseStudyCard>
            <CaseStudyTitle>{study.title}</CaseStudyTitle>
            <CaseStudyContent>{study.content}</CaseStudyContent>
            <CustomerName>{study.name}</CustomerName>
            <CustomerQuote>"{study.quote}"</CustomerQuote>
          </CaseStudyCard>
        )}
      </For>
    </CaseStudiesContainer>
  );
};

export default CaseStudies;
