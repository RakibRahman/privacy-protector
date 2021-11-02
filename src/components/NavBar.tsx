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
    borderBottom="1px solid #fff"
  >
    <Flex gridGap="2" align="center">
      <Image src={Safe} boxSize="40px" alt="logo" />
      <Heading fontSize={{ base: "15px", md: "30px", lg: "40px" }}>
        Privacy Procter
      </Heading>
    </Flex>
    <Spacer />

    <Flex fontSize={{ base: "18px", md: "30px" }} gridGap="4" cursor="pointer">
      <Text>Tips</Text>
      <Text>Log In</Text>

      <Text>Sign Up</Text>
    </Flex>
  </Flex>
);
