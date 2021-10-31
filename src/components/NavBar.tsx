import { Flex, Spacer, Image, Text, Heading } from "@chakra-ui/react";
import * as React from "react";
import Safe from "../assets/safe.png";

export const Navbar: React.FC = (props) => (
  <Flex
    color="white"
    p="2"
    align="center"
    justify="center"
    w="100%"
    h="80px"
    bgGradient="linear(to-l, #0BAB64,#3BB78F)"
  >
    <Flex gridGap="2" align="center">
      <Image src={Safe} boxSize="50px" alt="logo" />
      <Heading size="lg">Privacy Procter</Heading>
    </Flex>
    <Spacer />

    <Flex fontSize="xl" gridGap="4">
      <Text>Log In</Text>

      <Text>Sign Up</Text>
    </Flex>
  </Flex>
);
