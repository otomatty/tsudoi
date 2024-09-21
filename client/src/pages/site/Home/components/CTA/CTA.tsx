import { Component } from "solid-js";
import { CTASection, CTAButton } from "./CTA.styled";

const CTA: Component = () => {
  return (
    <CTASection>
      <CTAButton href="/signup">今すぐ始める</CTAButton>
    </CTASection>
  );
};

export default CTA;
