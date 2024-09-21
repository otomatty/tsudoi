import { Component } from "solid-js";
import { HeroContainer, Title, Subtitle } from "./Hero.styled";

const Hero: Component = () => {
  return (
    <HeroContainer>
      <Title>地域をつなぐ、新しいカタチ</Title>
      <Subtitle>あなたの街の地域限定SNS</Subtitle>
    </HeroContainer>
  );
};

export default Hero;
