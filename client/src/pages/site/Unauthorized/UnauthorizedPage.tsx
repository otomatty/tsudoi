import { Component } from "solid-js";

const UnauthorizedPage: Component = () => {
  return (
    <div>
      <h1>アクセス権限がありません</h1>
      <p>このページにアクセスする権限がありません。</p>
    </div>
  );
};

export default UnauthorizedPage;
