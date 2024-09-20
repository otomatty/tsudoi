import { Component, For } from "solid-js";
import { Container, Title } from "./FAQPage.styled";
import FAQItem from "./components/FAQItem";

const faqs = [
  {
    question: "このサービスは無料で利用できますか？",
    answer:
      "基本的な機能は無料でご利用いただけます。一部の高度な機能は有料プランでご提供しています。",
  },
  {
    question: "どの地域で利用できますか？",
    answer:
      "現在、○○県と△△県の一部地域でサービスを提供しています。順次、サービス提供地域を拡大していく予定です。",
  },
  {
    question: "個人情報は安全に保護されますか？",
    answer:
      "はい、最新のセキュリティ対策を実施し、個人情報の保護に最大限の注意を払っています。詳細はプライバシーポリシーをご確認ください。",
  },
  {
    question: "地域の事業者として情報を掲載するにはどうすればよいですか？",
    answer:
      "事業者アカウントを作成していただくことで、地域向けの情報発信が可能になります。詳細は「事業者の方へ」のページをご覧ください。",
  },
  {
    question: "不適切な投稿を見つけた場合はどうすればよいですか？",
    answer:
      "各投稿には「報告」ボタンがあります。不適切な内容を見つけた場合は、こちらから報告してください。管理者が確認し、適切に対応いたします。",
  },
];

const FAQPage: Component = () => {
  return (
    <Container>
      <Title>よくある質問</Title>
      <For each={faqs}>
        {(faq) => <FAQItem question={faq.question} answer={faq.answer} />}
      </For>
    </Container>
  );
};

export default FAQPage;
