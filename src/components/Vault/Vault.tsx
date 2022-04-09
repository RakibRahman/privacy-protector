import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../../context/context";
import Home from "./Home/Home";

const DashBoard = lazy(() => import("./DashBoard/DashBoard"));
const UpdateProfile = lazy(() => import("./DashBoard/UpdateProfile"));

const Vault = () => {
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
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/vault/dashboard">
                <DashBoard />
              </Route>
              <Route path="/vault/updateprofile">
                <UpdateProfile />
              </Route>
            </Suspense>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
};
export default Vault;
