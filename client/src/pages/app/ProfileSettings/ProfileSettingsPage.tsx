import { Component } from "solid-js";
import ProfileForm from "../../../components/app/ProfileForm/ProfileForm";
import { Container, Title } from "./ProfileSettingsPage.styled";

const ProfileSettings: Component = () => {
  return (
    <Container>
      <Title>プロフィール設定</Title>
      <ProfileForm />
    </Container>
  );
};

export default ProfileSettings;
