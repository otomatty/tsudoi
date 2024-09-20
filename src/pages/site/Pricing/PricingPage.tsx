import { Component } from "solid-js";
import { Container, Title } from "./PricingPage.styled";
import SectionTitle from "../../../components/site/SectionTitle/SectionTitle";
import PlanComparison from "./components/PlanComparison/PlanComparison";
import PlanDetails from "./components/PlanDetails/PlanDetails";
import PricingFAQ from "./components/PricingFAQ/PricingFAQ";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import PricingCTA from "./components/PricingCTA/PricingCTA";

const PricingPage: Component = () => {
  return (
    <Container>
      <Title>料金プラン</Title>
      <SectionTitle>プラン比較</SectionTitle>
      <PlanComparison />
      <SectionTitle>プラン詳細</SectionTitle>
      <PlanDetails />
      <SectionTitle>よくある質問</SectionTitle>
      <PricingFAQ />
      <SectionTitle>特別オファー</SectionTitle>
      <SpecialOffers />
      <SectionTitle>導入事例</SectionTitle>
      <CaseStudies />
      <PricingCTA />
    </Container>
  );
};

export default PricingPage;
