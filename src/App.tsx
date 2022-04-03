import React from "react";
import {
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Generator } from "./components/Generator/Generator";
import { Vault } from "./components/Vault/Vault";
import { ThemeProvider } from "./context/themeContext";

export const App = () => {
 
  const mainBg = useColorModeValue("#7F96FF", "#0a210f");

  return (
   <>
      <Router>
        <ThemeProvider>
          <Flex flexDirection="column" bg={mainBg} minH="100vh" h="100%">
            <Navbar />
            <Box flex="1">
              <Switch>
                <Route path="/" exact component={Generator} />
                <Route path="/vault" component={Vault} />
              </Switch>
            </Box>
            <Footer />
          </Flex>
        </ThemeProvider>
      </Router>
   </>
  );
};
