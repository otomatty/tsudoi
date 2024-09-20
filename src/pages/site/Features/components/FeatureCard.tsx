import { Component } from "solid-js";
import {
  FeatureCard as StyledFeatureCard,
  FeatureTitle,
  FeatureDescription,
} from "../FeaturesPage.styled";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: Component<FeatureCardProps> = (props) => {
  return (
    <StyledFeatureCard>
      <FeatureTitle>{props.title}</FeatureTitle>
      <FeatureDescription>{props.description}</FeatureDescription>
    </StyledFeatureCard>
  );
};

export default FeatureCard;
