import React from "react";
import {
  Flex,
  Spacer,
  Image,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import Safe from "../assets/safe.png";
import { useTheme } from "../context/themeContext";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { color, bg } = useTheme()!;

  return (
    <Flex
      color={color}
      p="2"
      align="center"
      justify="center"
      w="100%"
      // bgGradient="linear(to-l, #0BAB64,#3BB78F)"
      bg={bg}
      borderBottom="1px solid #fff"
    >
      <Flex gridGap="2" align="center">
        <Image src={Safe} boxSize="40px" alt="logo" />
        <Heading fontSize={{ base: "15px", md: "30px", lg: "40px" }}>
          <Link to="/">Privacy Protector</Link>
        </Heading>
      </Flex>
      <Spacer />

      <Flex
        fontSize={{ base: "18px", md: "30px" }}
        gridGap="4"
        cursor="pointer"
        align="center"
      >
        <Link to="/vault/home">Vault</Link>
        <Button _hover={{bg:'none'}} _focus={{border:'none'}} fontSize='xl' bg="none" onClick={toggleColorMode}>
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </Button>
      </Flex>
    </Flex>
  );
};
