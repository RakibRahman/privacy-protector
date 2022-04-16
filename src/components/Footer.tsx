import * as React from "react";
import { Text, Center, Link } from "@chakra-ui/react";
import { useTheme } from "../context/themeContext";

export const Footer = () => {
  const { color, bg } = useTheme()!;

  return (
    <Center
      bg={bg}
      h="10"
      fontSize="20"
      mt={{ base: "auto", sm: 5, lg: "auto" }}
      color={color}
    >
      <Text>Copyright © 2022 Reserved By rakibt</Text>
    </Center>
  );
};
