import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import BG from "../../assets/bg.svg";
import Emergency from "../../assets/emergency.png";
import { useTheme } from "../../context/themeContext";

export const WelcomeComponent = () => {
  const { color } = useTheme()!;
  const secondaryColor = useColorModeValue("#000000", "#ef4136");

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
      <VStack
        px="2"
        spacing="10px"
        textTransform="capitalize"
        letterSpacing="1px"
        fontWeight="bold"
      >
        <Text textAlign="center" color={color}>
          The Privacy Protector will help you to safeguard
          <Text as="strong" fontWeight="extrabold" color={secondaryColor}>
            {" "}
            your online presence.
          </Text>
        </Text>
        <Text color={color} textAlign="center">
          Notice: Please use{" "}
        <Link to='/vault/home'>
            <Text as="strong" fontWeight="extrabold" color={secondaryColor}>
              Vault
            </Text>{" "}
        </Link>
          to keep your password{" "}
          <Text fontWeight="extrabold" as="strong" color={secondaryColor}>
            safe.
          </Text>
        </Text>
      </VStack>
    </Flex>
  );
};
