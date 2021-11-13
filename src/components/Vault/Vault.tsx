import React from "react";
import { Box } from "@chakra-ui/react";
import { Home } from "./Home/Home";
import { DashBoard } from "./DashBoard/DashBoard";
export const Vault = () => {
  React.useEffect(() => {
    document.title = "Vault || Privacy Protector";
  }, []);
  return (
    <Box>
      <Home />
      <DashBoard />
    </Box>
  );
};
