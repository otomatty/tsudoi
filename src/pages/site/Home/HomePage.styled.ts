import { styled } from "solid-styled-components";

export const Container = styled("div")`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Hero = styled("div")`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled("h1")`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Subtitle = styled("h2")`
  font-size: 1.5rem;
  color: #666;
`;

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

export const CTASection = styled("div")`
  text-align: center;
`;

export const CTAButton = styled("a")`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.25rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
