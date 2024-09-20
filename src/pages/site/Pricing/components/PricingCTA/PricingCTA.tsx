import { Component } from "solid-js";
import {
  CTAContainer,
  CTATitle,
  CTADescription,
  CTAButton,
} from "./PricingCTA.styled";

const PricingCTA: Component = () => {
  return (
    <CTAContainer>
      <CTATitle>地域とつながる新しい方法を始めましょう</CTATitle>
      <CTADescription>
        30日間の無料トライアルで、地域SNSの可能性を体験してください。
        契約の縛りはありません。いつでもキャンセル可能です。
      </CTADescription>
      <CTAButton onClick={() => console.log("無料トライアル開始")}>
        無料トライアルを始める
      </CTAButton>
    </CTAContainer>
  );
};

export default PricingCTA;
