import React from "react";
import {
  Box,
  Flex,
  Text,
  FormLabel,
  Input,
  Heading,
  Button,
  HStack,
  Link,
} from "@chakra-ui/react";
export const LogIn = () => {
  return (
    <Box>
      <Heading>Welcome Back</Heading>

      <form>
        <Flex w="100%" flexDirection="column" gridGap="3">
          <FormLabel>
            <Text my="1"> Email:</Text>
            <Input placeholder="Email Address"></Input>
          </FormLabel>
          <FormLabel>
            <Text my="1">Password:</Text>

            <Input placeholder="Your Password"></Input>
          </FormLabel>
          <Link>Password Forgotten?</Link>
          <Button type="submit" bg="#1AB188" w="100%" fontSize="1.5rem">
            Log In
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
