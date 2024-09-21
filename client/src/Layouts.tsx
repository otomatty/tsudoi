import { Component } from "solid-js";
import Header from "./components/site/Header/Header";
import Footer from "./components/site/Footer/Footer";
import AdminHeader from "./components/admin/Header/Header";
import AdminSidebar from "./components/admin/Sidebar/Sidebar";
import {
  AdminLayoutContainer,
  AdminContentContainer,
  AdminMainContent,
  SiteMainContent,
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
