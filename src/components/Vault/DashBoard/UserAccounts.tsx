import React, { useState } from "react";
import { Box, Flex, Text, Image, Button, Spacer } from "@chakra-ui/react";
import { useFireStore } from "./hooks/useFireStore";
import { UserData } from "../../../interfaces/vaultTypes";

interface IProps {
  userData: UserData;
}
export const UserAccounts: React.FC<IProps> = ({ userData }) => {
  const { deleteUserLogin } = useFireStore();
  const [active, setActive] = useState<boolean>(false);
  const activeHandler = () => setActive(!active);

  return (
    <Box overflowY="scroll" cursor="pointer">
      <Text>Log In List</Text>

      <Flex
        flexDirection="column"
        gridGap="3"
        justify="center"
        align="start"
        pl="2"
      >
        {userData.map((login) => (
          <Flex
            onClick={() => console.log("click")}
            key={login.id}
            gridGap="2"
            align="center"
            justify="center"
            pl="1"
            w="100%"
          >
            <Image w="1.2rem" src={login.favicon} alt={"💂‍♂️"} />

            <Box>
              <Text>{login.site}</Text>
              <Text fontWeight="bold">{login.username}</Text>
            </Box>
            <Spacer />
            <Button
              bg="red"
              color="white"
              mx="1"
              onClick={() => deleteUserLogin(login.id)}
            >
              Delete
            </Button>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
