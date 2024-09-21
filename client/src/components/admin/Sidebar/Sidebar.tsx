import { Component } from "solid-js";
import {
  SidebarContainer,
  NavItem,
  NavSection,
  NavIcon,
  NavText,
} from "./Sidebar.styled";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiBarChart2,
  FiSettings,
  FiLayout,
  FiHelpCircle,
} from "solid-icons/fi";

const Sidebar: Component = () => {
  return (
    <SidebarContainer>
      <NavSection>
        <NavItem href="/admin">
          <NavIcon>
            <FiHome />
          </NavIcon>
          <NavText>ダッシュボード</NavText>
        </NavItem>
      </NavSection>
      <NavSection>
        <NavItem href="/admin/users">
          <NavIcon>
            <FiUsers />
          </NavIcon>
          <NavText>ユーザー管理</NavText>
        </NavItem>
        <NavItem href="/admin/content">
          <NavIcon>
            <FiFileText />
          </NavIcon>
          <NavText>コンテンツ管理</NavText>
        </NavItem>
        <NavItem href="/admin/statistics">
          <NavIcon>
            <FiBarChart2 />
          </NavIcon>
          <NavText>統計情報</NavText>
        </NavItem>
      </NavSection>
      <NavSection>
        <NavItem href="/admin/settings">
          <NavIcon>
            <FiSettings />
          </NavIcon>
          <NavText>システム設定</NavText>
        </NavItem>
        <NavItem href="/admin/appearance">
          <NavIcon>
            <FiLayout />
          </NavIcon>
          <NavText>外観管理</NavText>
        </NavItem>
      </NavSection>
      <NavSection>
        <NavItem href="/admin/help">
          <NavIcon>
            <FiHelpCircle />
          </NavIcon>
          <NavText>ヘルプ</NavText>
        </NavItem>
      </NavSection>
    </SidebarContainer>
  );
};

export default Sidebar;
