import * as React from "react";
import { Box, Text, Flex, Image, VStack } from "@chakra-ui/react";

import BG from "../assets/bg.svg";
import Emergency from "../assets/emergency.png";

export const WelcomeComponent = () => {
  return (
    <Flex
      w="100"
      gridGap="10"
      align="center"
      mt="20px"
      justify="center"
      pb="5"
      flexWrap="wrap"
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
          w="80%"
          mx="auto"
          my="20px"
        />
      </Box>
      <VStack px="2" spacing="10px">
        <Text fontSize="xl">
          The Privacy Procter will help you to create a <strong>secure </strong>
          password
        </Text>
        <Text color="#fff">
          Notice: Please keep your password <strong>safe</strong> in case you
          forget it.
        </Text>
      </VStack>
    </Flex>
  );
};
