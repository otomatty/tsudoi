import { styled } from "solid-styled-components";

export const CTAContainer = styled("div")`
  background-color: #f0f8ff;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
`;

export const CTATitle = styled("h2")`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const CTADescription = styled("p")`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

export const CTAButton = styled("button")`
  background-color: #0066cc;
  color: white;
  font-size: 1.1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0052a3;
  }
`;
