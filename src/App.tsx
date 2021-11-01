import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

//my components
import { Navbar } from "./components/NavBar";
import { WelcomeComponent } from "./components/Welcome";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bgGradient="linear(#FFCC2F,#EF5734)" pb="10">
      <Navbar />
      <WelcomeComponent />
      <Box borderBottom="1px solid #fff"></Box>
    </Box>
  </ChakraProvider>
);
