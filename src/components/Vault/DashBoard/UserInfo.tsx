import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";

import { ImUser } from "react-icons/im";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/context";

const UserInfo: React.FC = () => {
  const { currentUser, signOut } = useAuth()!;

  
    /* //TODO: fix style */
  
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
        bg="#6658D3"
        color="#ffffff"
        letterSpacing="1px"
        _hover={{
          opacity: 0.7,
          transform: "scale(1.03)",
        }}
      >
        <Link to="/vault/updateprofile">Update Profile</Link>
      </Button>
      <Button
        onClick={signOut}
        bg="#6658D3"
        color="#ffffff"
        letterSpacing="1px"
        _hover={{
          opacity: 0.7,
          transform: "scale(1.03)",
        }}
      >
        Sign Out
      </Button>
    </Flex>
  );
};
export default React.memo(UserInfo);
