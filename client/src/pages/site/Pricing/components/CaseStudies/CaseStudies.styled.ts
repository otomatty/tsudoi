import { styled } from "solid-styled-components";

export const CaseStudiesContainer = styled("div")`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const CaseStudyCard = styled("div")`
  flex: 1;
  min-width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CaseStudyTitle = styled("h3")`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const CaseStudyContent = styled("p")`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const CustomerName = styled("p")`
  font-weight: bold;
  color: #333;
`;

export const CustomerQuote = styled("p")`
  font-style: italic;
  color: #666;
  margin-top: 0.5rem;
`;
