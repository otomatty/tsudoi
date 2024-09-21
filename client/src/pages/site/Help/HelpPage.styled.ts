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
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

export const GuideList = styled("ul")`
  list-style-type: none;
  padding: 0;
`;

export const GuideItem = styled("li")`
  margin-bottom: 0.5rem;
`;

export const GuideLink = styled("a")`
  color: #0066cc;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactInfo = styled("div")`
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 4px;

  p {
    margin: 0.5rem 0;
  }

  a {
    color: #0066cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
