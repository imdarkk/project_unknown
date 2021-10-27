import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ProtectedRoutes, UnprotectedRoutes } from "./routes";
import { useAuth } from "./assets/auth/auth-context";
import './App.css';

const App = () => {
  const { loggedIn } = useAuth();
  return (
    <Router>
      {loggedIn ? <ProtectedRoutes /> : <UnprotectedRoutes />}
    </Router>
  );
}

export default App;
