import { Component, For } from "solid-js";
import { FAQContainer, Question, Answer } from "./PricingFAQ.styled";
import { getFaqsByCategory } from "../../../../../data/faqData";

const PricingFAQ: Component = () => {
  const pricingFaqs = getFaqsByCategory("pricing");

  return (
    <FAQContainer>
      <For each={pricingFaqs}>
        {(faq) => (
          <>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </>
        )}
      </For>
    </FAQContainer>
  );
};

export default PricingFAQ;
