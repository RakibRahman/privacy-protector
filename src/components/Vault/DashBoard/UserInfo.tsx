import React from "react";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import {
  VscAccount,
  VscSync,
  VscSignOut,
  VscTriangleDown,
} from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/context";

const UserInfo: React.FC = () => {
  const { currentUser, signOut } = useAuth()!;

  return (
    <Flex
      w='300px'
      mt="10"
      fontSize="2rem"
      align="center"
      justify="center"
      gridGap={4}
      flexWrap="wrap"
    >
      <VscAccount color="#f5f5f5" />
   
      <Menu>
        <MenuButton as={Button} rightIcon={<VscTriangleDown />}>
          {currentUser?.email}
        </MenuButton>
        <MenuList fontSize="md">
          <Link to="/vault/updateprofile">
            <MenuItem icon={<VscSync />}>Update Profile</MenuItem>
          </Link>

          <MenuItem icon={<VscSignOut />} onClick={signOut}>
            Sign Out
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default React.memo(UserInfo);
