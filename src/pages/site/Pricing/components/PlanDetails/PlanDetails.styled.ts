import { styled } from "solid-styled-components";

export const PlanContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const PlanCard = styled("div")`
  flex: 1;
  min-width: 250px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
`;

export const PlanName = styled("h3")`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const PlanPrice = styled("p")`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const FeatureList = styled("ul")`
  list-style-type: none;
  padding: 0;
`;

export const Feature = styled("li")`
  margin-bottom: 0.5rem;
`;
