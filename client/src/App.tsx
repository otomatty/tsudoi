import { Component } from "solid-js";
import { Router } from "@solidjs/router";
import { AppRoutes } from "./AppRoutes";

const App: Component = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
