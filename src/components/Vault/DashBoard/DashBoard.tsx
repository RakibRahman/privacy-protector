import React from "react";
import { Text, Flex, Spacer } from "@chakra-ui/react";
import { useAuth } from "./../context/context";
import { UserInfo } from "./UserInfo";
import { UserData } from "./UserData";
import { UserAccounts } from "./UserAccounts";
import { useCollection } from "./hooks/useCollection";

export const DashBoard = () => {
  const { currentUser } = useAuth()!;
  const { userData, error } = useCollection(["uid", "==", currentUser?.uid]);

  return (
    <Flex
      w="100%"
      minH="80vh"
      flexDirection="column"
      justify="center"
      align="center"
    >
      <UserInfo />
      <Text>{error}</Text>
      {userData && <UserAccounts userData={userData} />}
      <Spacer />
      <UserData />
    </Flex>
  );
};
