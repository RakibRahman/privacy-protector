import * as React from "react";
import { Form } from "./Form";
import { Box } from "@chakra-ui/react";
import { WelcomeComponent } from "./Welcome";
export const Generator: React.FC = () => {
  React.useEffect(() => {
    document.title = "Privacy Protector";
  }, []);
  // bgGradient = "linear(#FFCC2F,#EF5734)";
  return (
    <Box bg="#DB7D3A" p="10">
      <WelcomeComponent />
      <Box borderBottom="1px solid #fff"></Box>

      <Box
        className="generator"
        border="1px solid black"
        borderRadius="xl"
        w={{ sm: "100%", lg: "600px" }}
        minH="300px"
        mx="auto"
        my="20px"
        p="4"
      >
        <Form />
      </Box>
    </Box>
  );
};
