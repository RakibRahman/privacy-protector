import React, { lazy, Suspense } from "react";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
// import { Footer } from "./components/Footer";
import { FallBack } from "./components/FallBack/FallBack";
import ErrorPage from "./components/ErrorPage";
import { ThemeProvider } from "./context/themeContext";

const Generator = lazy(() => import("./components/Generator/Generator"));
const Vault = lazy(() => import("./components/Vault/Vault"));

export const App = () => {
  const mainBg = useColorModeValue("#40BCD8", "#0a210f");

  return (
    <>
      <Router>
        <ThemeProvider>
          <Flex
            flexDirection="column"
            bg={mainBg}
            minH="100vh"
            h="100%"
            gridGap="3"
          >
            <Navbar />
            <Box flex="1">
              <Switch>
                <Suspense fallback={<FallBack />}>
                  <Route path="/" exact component={Generator} />
                  <Route path="/vault" component={Vault} />
                </Suspense>
                <Route path="/*">
                  <ErrorPage />
                </Route>
              </Switch>
            </Box>
            {/* <Footer /> */}
          </Flex>
        </ThemeProvider>
      </Router>
    </>
  );
};
