import React from "react";
import { Box } from "@chakra-ui/react";
import { Home } from "./Home/Home";
export const Vault = () => {
  React.useEffect(() => {
    document.title = "Vault || Privacy Protector";
  }, []);
  return (
    <Box>
      <Home />
    </Box>
  );
};
