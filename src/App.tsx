import React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//my components
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Generator } from "./components/Generator/Generator";
import { Vault } from "./components/Vault/Vault";
import Tips from "./components/Tips/Tips";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Generator} />
          <Route path="/vault" component={Vault} />
          <Route path="/tips" component={Tips} />
        </Switch>
        <Footer />
      </Router>
    </Box>
  </ChakraProvider>
);
