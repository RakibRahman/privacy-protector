import React from "react";
import { Box, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useAuth } from "./../context/context";
import { UserInfo } from "./UserInfo";
import { UserData } from "./UserData";
import { UserAccounts } from "./UserAccounts";
import { useCollection } from "./hooks/useCollection";

export const DashBoard = () => {
  const { currentUser } = useAuth()!;
  const { userData, error } = useCollection();
  // ["", "==", currentUser.uid]
  return (
    <Flex justify="center" align="center" w="100%" minH="80vh">
      <Flex
        className="leftSideBox"
        w="500px"
        border="5px solid black"
        minH="50vh"
        flexDirection="column"
      >
        <UserInfo />
        <Spacer />
        <Text>{error}</Text>
        {userData && <UserAccounts userData={userData} />}
        <Spacer />
        <UserData />
      </Flex>

      <Box className="rightSideBox" border="5px solid black" minH="50vh">
        <Box>
          <Heading>Account List</Heading>
          <Box>
            <Text>Randomizer</Text>
            <Text>Randomizer</Text>
            <Text>Randomizer</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};