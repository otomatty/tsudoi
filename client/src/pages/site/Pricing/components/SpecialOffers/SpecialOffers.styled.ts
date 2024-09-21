import { styled } from "solid-styled-components";

export const OffersContainer = styled("div")`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const OfferCard = styled("div")`
  flex: 1;
  min-width: 250px;
  background-color: #f0f8ff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const OfferTitle = styled("h3")`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #0066cc;
`;

export const OfferDescription = styled("p")`
  font-size: 1rem;
  color: #333;
`;
