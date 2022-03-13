import React from "react";
import { Flex, Spacer, Image, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Safe from "../assets/safe.png";

export const Navbar = React.memo((props) => (
  <Flex
    color="white"
    p="2"
    align="center"
    justify="center"
    w="100%"
    bgGradient="linear(to-l, #0BAB64,#3BB78F)"
    borderBottom="1px solid #fff"
  >
    <Flex gridGap="2" align="center">
      <Image src={Safe} boxSize="40px" alt="logo" />
      <Heading fontSize={{ base: "15px", md: "30px", lg: "40px" }}>
        <Link to="/">Privacy Protector</Link>
      </Heading>
    </Flex>
    <Spacer />

    <Flex fontSize={{ base: "18px", md: "30px" }} gridGap="4" cursor="pointer">
      <Link to="/vault/home">Vault</Link>
      <Text>Dark Mode</Text>
    </Flex>
  </Flex>
));
