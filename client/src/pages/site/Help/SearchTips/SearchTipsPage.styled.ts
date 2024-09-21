import { styled } from "solid-styled-components";

export const Container = styled("div")`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled("h1")`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Section = styled("section")`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled("h2")`
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 1rem;
`;

export const Paragraph = styled("p")`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
`;

export const TipList = styled("ul")`
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;

export const TipItem = styled("li")`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const Note = styled("p")`
  font-size: 0.9rem;
  color: #666;
  background-color: #f0f0f0;
  padding: 0.5rem;
  border-left: 3px solid #ccc;
  margin-top: 0.5rem;
`;

export const ExampleBox = styled("div")`
  background-color: #e6f7ff;
  color: #0066cc;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-style: italic;
`;
