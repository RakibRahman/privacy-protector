import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";

import { ImUser } from "react-icons/im";

import { useAuth } from "./../context/context";

const UserInfo: React.FC = () => {
  const { currentUser, signOut } = useAuth()!;
  return (
    <Flex
      my="2"
      className="user__info"
      fontSize="2rem"
      align="center"
      justify="center"
      gridGap="4"
      color="black"
      flexWrap="wrap"
    >
      <ImUser color="#6658D3" />
      <Heading color="#ffffff">{currentUser?.email}</Heading>
      <Button
        onClick={signOut}
        bg="#6658D3"
        color="#ffffff"
        letterSpacing="1px"
      >
        Sign Out
      </Button>
    </Flex>
  );
};
export default React.memo(UserInfo);
