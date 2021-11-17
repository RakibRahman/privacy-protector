import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";

import { ImUser } from "react-icons/im";

import { useAuth } from "./../context/context";

const UserInfo: React.FC = () => {
  const { currentUser, signOut } = useAuth()!;
  return (
    <Flex
      className="user__info"
      fontSize="2rem"
      align="center"
      justify="center"
      gridGap="4"
      border="3px dashed#f14"
    >
      <ImUser color="green" />
      <Heading>{currentUser?.email}</Heading>
      <Button onClick={signOut}>SignOut</Button>
    </Flex>
  );
};
export default React.memo(UserInfo);
