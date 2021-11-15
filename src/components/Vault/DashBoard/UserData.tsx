import React from "react";
import { Box } from "@chakra-ui/react";
// import { useAuth } from "./../context/context";

import { AddData } from "./AddData";

export const UserData = () => {
  // const { currentUser } = useAuth()!;
  return (
    <Box>
      <AddData />
    </Box>
  );
};
