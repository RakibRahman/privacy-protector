import React from "react";
import { ChakraProvider, Flex,Box, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Generator } from "./components/Generator/Generator";
import { Vault } from "./components/Vault/Vault";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Flex
        flexDirection="column"
        className="app"
        minH='100vh'
        h="100%"
      >
        <Navbar />
       <Box flex='1'>
          <Switch>
            <Route path="/" exact component={Generator} />
            <Route path="/vault" component={Vault} />
          </Switch>
       </Box>
        
        <Footer />
      </Flex>
    </Router>
  </ChakraProvider>
);
