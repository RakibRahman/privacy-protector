import React from "react";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
import { useAuth } from "./../context/context";
import UserInfo from "./UserInfo";
import { MemoizedAddData } from "./AddData";
import UserAccounts from "./UserAccounts";
import { useCollection } from "./hooks/useCollection";
import Spinner from "../../../assets/spinner.svg";

export const DashBoard = () => {
  const { currentUser } = useAuth()!;
  const { userData, error, loading } = useCollection([
    "uid",
    "==",
    currentUser?.uid,
  ]);

  return (
    <Flex
      w="100%"
      // minH="80vh"
      flexDirection="column"
      justify="start"
      align="center"
      bg="#DDF0E9"
    >
      <Flex gridGap="4" flexWrap="wrap">
        <UserInfo />
        <MemoizedAddData />
      </Flex>
      <Text>{error}</Text>
      {loading && (
        <Box color="#1AB188" w="15" h="15">
          <Image src={Spinner} alt="Loading..." />
        </Box>
      )}
      {userData && <UserAccounts userData={userData} />}
    </Flex>
  );
};
