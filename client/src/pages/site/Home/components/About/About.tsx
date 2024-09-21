import { Component } from "solid-js";
import { AboutSection, Title, Description } from "./About.styled";

const About: Component = () => {
  return (
    <AboutSection>
      <Title>地域をつなぐSNS</Title>
      <Description>
        私たちのアプリは、地域コミュニティを活性化し、人々をつなげることを目的としています。
        地元の情報共有、イベント告知、求人情報など、あなたの街に特化した機能を提供します。
      </Description>
    </AboutSection>
  );
};

export default About;
