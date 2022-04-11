import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../../context/context";
import Home from "./Home/Home";
import { FallBack } from "../FallBack/FallBack";
import ErrorPage from "../ErrorPage";
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
            <Suspense fallback={<FallBack />}>
              <Route path="/vault/dashboard">
                <DashBoard />
              </Route>
              <Route path="/vault/updateprofile">
                <UpdateProfile />
              </Route>
            </Suspense>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
};
export default Vault;
