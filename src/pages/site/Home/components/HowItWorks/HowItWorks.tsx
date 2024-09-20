import { Component } from "solid-js";
import {
  HowItWorksSection,
  Title,
  Step,
  StepNumber,
  StepTitle,
  StepDescription,
} from "./HowItWorks.styled";

const HowItWorks: Component = () => {
  return (
    <HowItWorksSection>
      <Title>使い方</Title>
      <Step>
        <StepNumber>1</StepNumber>
        <StepTitle>アカウント作成</StepTitle>
        <StepDescription>
          簡単な情報入力でアカウントを作成します。
        </StepDescription>
      </Step>
      <Step>
        <StepNumber>2</StepNumber>
        <StepTitle>プロフィール設定</StepTitle>
        <StepDescription>あなたの興味や活動範囲を設定します。</StepDescription>
      </Step>
      <Step>
        <StepNumber>3</StepNumber>
        <StepTitle>地域とつながる</StepTitle>
        <StepDescription>
          地域の情報を閲覧したり、投稿したりして交流を始めましょう。
        </StepDescription>
      </Step>
    </HowItWorksSection>
  );
};

export default HowItWorks;
