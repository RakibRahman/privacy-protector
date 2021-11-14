import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useAuth } from "./../context/context";

export const DashBoard = () => {
  const { currentUser, signOut } = useAuth()!;
  return (
    <Box>
      <Heading>DashBoard</Heading>
      <Text>{currentUser?.email}</Text>
      <Button onClick={signOut}>SignOut</Button>
    </Box>
  );
};
