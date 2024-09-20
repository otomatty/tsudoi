import { Component } from "solid-js";
import { Question, Answer } from "../FAQPage.styled";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: Component<FAQItemProps> = (props) => {
  return (
    <>
      <Question>{props.question}</Question>
      <Answer>{props.answer}</Answer>
    </>
  );
};

export default FAQItem;
