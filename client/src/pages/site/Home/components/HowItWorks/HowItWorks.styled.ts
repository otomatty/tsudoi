import { styled } from "solid-styled-components";

export const HowItWorksSection = styled("section")`
  padding: 4rem 0;
  background-color: #f8f8f8;
`;

export const Title = styled("h2")`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Step = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const StepNumber = styled("div")`
  background-color: #007bff;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const StepTitle = styled("h3")`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const StepDescription = styled("p")`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  max-width: 300px;
`;
