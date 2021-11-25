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
      <ImUser color="#FF6A66" />
      <Heading>{currentUser?.email}</Heading>
      <Button
        onClick={signOut}
        bg="#FF6A66"
        color="#ffffff"
        letterSpacing="1px"
      >
        Sign Out
      </Button>
    </Flex>
  );
};
export default React.memo(UserInfo);
