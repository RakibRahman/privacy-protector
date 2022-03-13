import React from "react";
import { Form } from "./Form";
import { Box } from "@chakra-ui/react";
import { WelcomeComponent } from "./Welcome";

export const Generator: React.FC = () => {
  React.useEffect(() => {
    document.title = "Privacy Protector";
  }, []);

  return (
    <Box p={{ sm: "2", md: "6", lg: "10" }} className="generator__wrapper">
      <WelcomeComponent />
      <Box borderBottom="1px solid #fff" my={3}></Box>

      <Box
        className="generator"
        border="1px solid black"
        borderRadius="xl"
        w={{ sm: "100%", lg: "600px" }}
        mx="auto"
        mt="30px"
        p="4"
      >
        <Form />
      </Box>
    </Box>
  );
};
