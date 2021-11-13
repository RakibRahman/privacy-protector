import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
export const SignUp = () => {
  return (
    <Box>
      <Heading>Sign Up for Free</Heading>
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
          <FormLabel>
            <Text my="1">Repeat Password:</Text>

            <Input placeholder="Repeat Password"></Input>
          </FormLabel>

          <Button type="submit" bg="#1AB188" w="100%" fontSize="1.5rem">
            Sign Up
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
