import React from "react";
import {
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { VscAccount, VscSync,VscSignOut, VscTriangleDown } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/context";

const UserInfo: React.FC = () => {
  const { currentUser, signOut } = useAuth()!;

  
    /* //TODO: fix style */
  
  return (
    <Flex
      my="10"
      className="user__info"
      fontSize="2rem"
      align="center"
      justify="center"
      gridGap={4}
      color="#3c4b66"
      flexWrap="wrap"
    >
      <VscAccount color="#6658D3" />
      {/* <Heading>{currentUser?.email}</Heading> */}
      <Menu isLazy>
        <MenuButton as={Button} rightIcon={<VscTriangleDown />}>
          {currentUser?.email}
        </MenuButton>
        <MenuList fontSize="md">
          <MenuItem icon={<VscSync />}>
            <Link to="/vault/updateprofile">Update Profile</Link>
          </MenuItem>

          <MenuItem icon={<VscSignOut/>} onClick={signOut}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default React.memo(UserInfo);
