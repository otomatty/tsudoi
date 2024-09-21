import { styled } from "solid-styled-components";

export const Container = styled("div")`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled("h1")`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
`;

export const Label = styled("label")`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

export const Input = styled("input")`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled("textarea")`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 150px;
`;

export const SubmitButton = styled("button")`
  font-size: 1.1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
