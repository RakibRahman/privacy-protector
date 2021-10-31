import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

//my components
import { Navbar } from "./components/NavBar";
import { WelcomeComponent } from "./components/Welcome";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bgGradient="linear(#FFCC2F,#EF5734)" minH="50vh">
      <Navbar />
      <WelcomeComponent />
    </Box>
  </ChakraProvider>
);
