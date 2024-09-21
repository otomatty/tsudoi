import { Component, JSX } from "solid-js";
import { StyledSectionTitle } from "./SectionTitle.styled";

interface SectionTitleProps {
  children: JSX.Element;
  className?: string;
}

const SectionTitle: Component<SectionTitleProps> = (props) => {
  return (
    <StyledSectionTitle class={props.className}>
      {props.children}
    </StyledSectionTitle>
  );
};

export default SectionTitle;
