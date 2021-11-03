import * as React from "react";
import { Text, Center, Link } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <Center bg="#1BAF72" h="10" fontSize="20" color="#ffffff">
      <Text>
        Made by
        <Link href="https://github.com/RakibRahman"> Rakib </Link> With ❤
      </Text>
    </Center>
  );
};
