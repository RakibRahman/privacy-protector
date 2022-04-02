import React from "react";
import { Box, Text, Flex, Image, VStack } from "@chakra-ui/react";

import BG from "../../assets/bg.svg";
import Emergency from "../../assets/emergency.png";

export const WelcomeComponent = () => {
  return (
    <Flex
      fontSize={{ sm: "1rem", md: "1.5rem", lg: "2rem" }}
      w="100%"
      gridGap="10"
      align="center"
      justify="center"
      flexWrap="wrap"
      mt={{base:2}}
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
          objectFit='cover'
          mx="auto"
          my="10px"
        />
      </Box>
      <VStack px="2" spacing="10px">
        <Text textAlign="center" color="#ffffff">
          The Privacy Protector will help you to create a
          <Text as="strong" color="#f14e0d">
            {" "}
            secure{" "}
          </Text>
          password
        </Text>
        <Text color="#fff">
          Notice: Please keep your password{" "}
          <Text as="strong" color="#f14e0d">
            safe{" "}
          </Text>
          in case you forget it.
        </Text>
      </VStack>
    </Flex>
  );
};
