import { styled } from "solid-styled-components";

export const FeaturesSection = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const FeatureCard = styled("div")`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FeatureTitle = styled("h3")`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled("p")`
  color: #666;
`;
