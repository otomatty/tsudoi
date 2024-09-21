import { Component, For } from "solid-js";
import { FAQSection, Title, Question, Answer } from "./FAQ.styled";
import { getPickedUpFaqs } from "../../../../../data/faqData";

const FAQ: Component = () => {
  const pickedUpFaqs = getPickedUpFaqs();

  return (
    <FAQSection>
      <Title>よくある質問</Title>
      <For each={pickedUpFaqs}>
        {(faq) => (
          <>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </>
        )}
      </For>
    </FAQSection>
  );
};

export default FAQ;
