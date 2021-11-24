import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { useAuth } from "./../context/context";
import UserInfo from "./UserInfo";
import { MemoizedAddData } from "./AddData";
import UserAccounts from "./UserAccounts";
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
      bg="#E9EEF8"
    >
      <Flex gridGap="4">
        <UserInfo />
        <MemoizedAddData />
      </Flex>
      <Text>{error}</Text>
      {userData && <UserAccounts userData={userData} />}
    </Flex>
  );
};
