import { styled } from "solid-styled-components";

export const ComparisonTable = styled("table")`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

export const TableHeader = styled("thead")`
  background-color: #f8f8f8;
`;

export const TableRow = styled("tr")`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

export const TableCell = styled("td")`
  padding: 1rem;
  text-align: center;
  border: 1px solid #e0e0e0;
`;

export const PlanName = styled("th")`
  padding: 1rem;
  font-weight: bold;
  text-align: center;
  border: 1px solid #e0e0e0;
`;

export const FeatureName = styled("td")`
  padding: 1rem;
  text-align: left;
  font-weight: bold;
  border: 1px solid #e0e0e0;
`;

export const CheckMark = styled("span")`
  color: #4caf50;
  font-size: 1.2rem;
`;
