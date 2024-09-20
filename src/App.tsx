import { Component } from "solid-js";
import { Router } from "@solidjs/router";
import { AppRoutes } from "./AppRoutes";
import { useAuth } from "./hooks/useAuth";

const App: Component = () => {
  const { user, isAdmin } = useAuth();

  return (
    <Router>
      <AppRoutes user={user} isAdmin={isAdmin} />
    </Router>
  );
};

export default App;
