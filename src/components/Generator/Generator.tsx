import React from "react";
import { Form } from "./Form";
import { Box } from "@chakra-ui/react";
import { WelcomeComponent } from "./Welcome";
import { useTheme } from "../../context/themeContext";
const Generator: React.FC = () => {
  const { bg } = useTheme()!;
  React.useEffect(() => {
    document.title = "Privacy Protector";
  }, []);

  return (
    <Box px={5}>
      <WelcomeComponent />
      <Box borderBottom="1px solid #fff" my={3}></Box>

      <Box
        bg={bg}
        borderRadius="xl"
        w={{ sm: "100%", lg: "600px" }}
        mx="auto"
        my="10px"
        p="4"
      >
        <Form />
      </Box>
    </Box>
  );
};
export default Generator;
