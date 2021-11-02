import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//my components
import { Navbar } from "./components/NavBar";

import { Generator } from "./components/Generator";
import { Bookmarks } from "./components/Bookmarks";
import { Tips } from "./components/Tips";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box pb="10">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Generator} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/tips" component={Tips} />
        </Switch>
      </Router>
    </Box>
  </ChakraProvider>
);
