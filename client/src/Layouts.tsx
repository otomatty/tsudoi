import { Component } from "solid-js";
import Header from "./components/site/Header/Header";
import Footer from "./components/site/Footer/Footer";
// import AppHeader from "./components/app/Header/Header";
import AdminHeader from "./components/admin/Header/Header";
import AdminSidebar from "./components/admin/Sidebar/Sidebar";
import {
  AdminLayoutContainer,
  AdminContentContainer,
  AdminMainContent,
  SiteMainContent,
  AppMainContent,
} from "./Layouts.styled";

export const SiteLayout: Component<{ children?: any }> = (props) => {
  return (
    <>
      <Header />
      <SiteMainContent>{props.children}</SiteMainContent>
      <Footer />
    </>
  );
};

export const AppLayout: Component<{ children?: any }> = (props) => {
  return (
    <>
      {/* <AppHeader /> */}
      <AppMainContent>{props.children}</AppMainContent>
    </>
  );
};

export const AdminLayout: Component<{ children?: any }> = (props) => {
  return (
    <AdminLayoutContainer>
      <AdminSidebar />
      <AdminContentContainer>
        <AdminHeader />
        <AdminMainContent>{props.children}</AdminMainContent>
      </AdminContentContainer>
    </AdminLayoutContainer>
  );
};
