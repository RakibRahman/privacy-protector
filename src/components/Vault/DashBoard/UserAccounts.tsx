import React, { useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

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
  const activeHnadler = () => setActive(!active);
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
            onClick={activeHnadler}
            key={login.id}
            gridGap="2"
            align="center"
            pl="1"
            borderLeft={`2px solid ${active ? "green" : "red"}`}
          >
            <Image src={login.favicon} alt={"💂‍♂️"} />

            <Box>
              <Text>{login.site}</Text>
              <Text fontWeight="bold">{login.username}</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
