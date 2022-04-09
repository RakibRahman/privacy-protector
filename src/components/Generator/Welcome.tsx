import React from "react";
import { Box, Text, Flex, Image, VStack } from "@chakra-ui/react";

import BG from "../../assets/bg.svg";
import Emergency from "../../assets/emergency.png";
import { useTheme } from "../../context/themeContext";

export const WelcomeComponent = () => {
  const { color } = useTheme()!;

  return (
    <Flex
      fontSize={{ sm: "1rem", md: "1.5rem", lg: "2rem" }}
      w="100%"
      gridGap="10"
      align="center"
      justify="center"
      flexWrap="wrap"
      mt={{ base: 2 }}
      color={color}
    >
      <Box
        w="120px"
        h="120px"
        backgroundImage={BG}
        backgroundPosition="center"
        borderRadius="2xl"
        border="1px solid white"
      >
        <Image
          className="vibrate-1"
          src={Emergency}
          alt="background_abstract"
          w="100px"
          h="100px"
          objectFit="cover"
          mx="auto"
          my="10px"
        />
      </Box>
      <VStack px="2" spacing="10px">
        <Text textAlign="center" color={color}>
          The Privacy Protector will help you to safeguard
          <Text as="strong" color="#f14e0d">
            {" "}
            your online presence.
          </Text>
        </Text>
        <Text color={color} textAlign="center">
          Notice: Please use{" "}
          <Text as="strong" fontWeight="bold" color="#f14e0d">
            Vault
          </Text>{" "}
          to keep your password{" "}
          <Text as="strong" color="#f14e0d">
            safe.
          </Text>
        </Text>
      </VStack>
    </Flex>
  );
};
