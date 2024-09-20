export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  isPickedUp: boolean;
}

export const faqs: FAQ[] = [
  {
    id: "pricing1",
    question: "プランはいつでも変更できますか？",
    answer:
      "はい、プランはいつでも変更可能です。アップグレードの場合は即時反映され、ダウングレードの場合は現在の請求期間の終了時に反映されます。",
    category: "pricing",
    isPickedUp: true,
  },
  {
    id: "pricing2",
    question: "無料プランから有料プランへの移行は簡単ですか？",
    answer:
      "はい、とても簡単です。アカウント設定から希望のプランを選択し、支払い情報を入力するだけで移行できます。",
    category: "pricing",
    isPickedUp: false,
  },
  {
    id: "pricing3",
    question: "支払い方法は何がありますか？",
    answer:
      "クレジットカード（Visa、MasterCard、American Express）、PayPal、銀行振込に対応しています。",
    category: "pricing",
    isPickedUp: true,
  },
  {
    id: "pricing4",
    question: "返金ポリシーはありますか？",
    answer:
      "はい、30日間の返金保証を提供しています。サービスに満足いただけない場合、最初の30日以内であれば全額返金いたします。",
    category: "pricing",
    isPickedUp: false,
  },
  {
    id: "general1",
    question: "地域SNSとは何ですか？",
    answer:
      "地域SNSは、特定の地域やコミュニティに特化したソーシャルネットワーキングサービスです。地域の情報共有、イベント告知、ビジネス支援などを目的としています。",
    category: "general",
    isPickedUp: true,
  },
  {
    id: "general2",
    question: "どの地域で利用できますか？",
    answer:
      "現在、○○県と△△県の一部地域でサービスを提供しています。順次、サービス提供地域を拡大していく予定です。",
    category: "general",
    isPickedUp: false,
  },
  // 他のFAQを追加...
];

export const getFaqsByCategory = (category: string): FAQ[] => {
  return faqs.filter((faq) => faq.category === category);
};

export const getPickedUpFaqs = (): FAQ[] => {
  return faqs.filter((faq) => faq.isPickedUp);
};
