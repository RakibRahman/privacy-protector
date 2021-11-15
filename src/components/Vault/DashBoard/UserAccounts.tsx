import React, { useState } from "react";
import { Box, Flex, Text, Image, Button, Spacer } from "@chakra-ui/react";
import { fbStore } from "./../../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

interface UserProps {
  site: string;
  password?: string;
  uid?: string;
  id?: string;
  username: string;
  favicon: string;
}
type UserData = UserProps[];
interface IProps {
  userData: UserData;
}
export const UserAccounts: React.FC<IProps> = ({ userData }) => {
  const [active, setActive] = useState<boolean>(false);
  const activeHandler = () => setActive(!active);

  const deleteLogin = async (id: string) => {
    let loginDoc = doc(fbStore, "users", id);
    await deleteDoc(loginDoc);
  };
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
            onClick={activeHandler}
            key={login.id}
            gridGap="2"
            align="center"
            justify="center"
            pl="1"
            w="100%"
            borderLeft={`2px solid ${active ? "green" : "red"}`}
          >
            <Image src={login.favicon} alt={"💂‍♂️"} />

            <Box>
              <Text>{login.site}</Text>
              <Text fontWeight="bold">{login.username}</Text>
            </Box>
            <Spacer />
            <Button
              bg="red"
              color="white"
              mx="1"
              onClick={() => deleteLogin(login.id)}
            >
              Delete
            </Button>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
