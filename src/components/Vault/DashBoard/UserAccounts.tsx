import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { UserData } from "../../../interfaces/vaultTypes";
import { UserDetail } from "./UserDetail";
interface IProps {
  userData: UserData;
}
export const UserAccounts: React.FC<IProps> = ({ userData }) => {
  return (
    <Box cursor="pointer" border="1px" w="100%" overflow="hidden">
      <Flex flexDirection="column" gridGap="3" justify="center" align="start">
        {userData.map((login) => (
          <React.Fragment key={login.id}>
            <UserDetail login={login} />
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
};
