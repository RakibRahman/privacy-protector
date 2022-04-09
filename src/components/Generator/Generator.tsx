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
    <Box p={{ sm: 2, md: 4 }} className="generator__wrapper">
      <WelcomeComponent />
      <Box borderBottom="1px solid #fff" my={3}></Box>

      <Box
        // className="generator"
        bg={bg}
        borderRadius="xl"
        w={{ sm: "100%", lg: "600px" }}
        mx="auto"
        mt="10px"
        p="4"
      >
        <Form />
      </Box>
    </Box>
  );
};
export default Generator;