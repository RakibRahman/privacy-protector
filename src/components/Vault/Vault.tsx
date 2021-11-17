import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/context";
import Home from "./Home/Home";
import { DashBoard } from "./DashBoard/DashBoard";

export const Vault = () => {
  React.useEffect(() => {
    document.title = "Vault || Privacy Protector";
  }, []);

  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/vault/home">
              <Home />
            </Route>
            <Route path="/vault/dashboard">
              <DashBoard />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
};
