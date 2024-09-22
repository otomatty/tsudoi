import { styled } from "solid-styled-components";

export const AdminLayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const AdminContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AdminMainContent = styled.main`
  padding: 2rem;
  flex: 1;
  overflow-y: auto;
`;

export const SiteMainContent = styled.main`
  min-height: calc(100vh - 60px - 100px); // ヘッダーとフッターの高さを考慮
  padding: 2rem;
`;

export const AppMainContent = styled.main`
  padding: 20px;
  // アプリケーション固有のスタイルを追加
`;
