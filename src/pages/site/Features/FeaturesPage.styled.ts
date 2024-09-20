import { styled } from "solid-styled-components";

export const Container = styled("div")`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled("h1")`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
`;

export const FeatureCard = styled("div")`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const FeatureTitle = styled("h2")`
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled("p")`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.5;
`;
