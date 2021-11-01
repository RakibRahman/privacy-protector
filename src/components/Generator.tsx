import * as React from "react";
import { Form } from "./Form";
import { Box, FormControl } from "@chakra-ui/react";

export const Generator: React.FC = () => {
  return (
    <Box
      border="1px solid black"
      w="600px"
      minH="300px"
      mx="auto"
      my="20px"
      p="2"
    >
      <FormControl id="password">
        <Form />
      </FormControl>
    </Box>
  );
};
