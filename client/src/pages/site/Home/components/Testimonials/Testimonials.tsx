import { Component, For } from "solid-js";
import {
  TestimonialsSection,
  Title,
  TestimonialCard,
  Quote,
  Author,
} from "./Testimonials.styled";

const testimonials = [
  {
    quote: "このアプリのおかげで、地域の情報をすぐに得られるようになりました。",
    author: "田中さん（30代）",
  },
  {
    quote: "地元の人たちと簡単につながれて、新しい友達ができました。",
    author: "佐藤さん（20代）",
  },
  {
    quote: "地域の課題解決に参加できる機会が増えて嬉しいです。",
    author: "鈴木さん（40代）",
  },
];

const Testimonials: Component = () => {
  return (
    <TestimonialsSection>
      <Title>ユーザーの声</Title>
      <For each={testimonials}>
        {(testimonial) => (
          <TestimonialCard>
            <Quote>{testimonial.quote}</Quote>
            <Author>{testimonial.author}</Author>
          </TestimonialCard>
        )}
      </For>
    </TestimonialsSection>
  );
};

export default Testimonials;
