import React from "react";
import { Box } from "@chakra-ui/react";
import { Home } from "./Home/Home";
import { DashBoard } from "./DashBoard/DashBoard";
import { AuthProvider } from "./context/context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

export const Vault = () => {
  React.useEffect(() => {
    document.title = "Vault || Privacy Protector";
  }, []);
  return (
    <Box>
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
    </Box>
  );
};
