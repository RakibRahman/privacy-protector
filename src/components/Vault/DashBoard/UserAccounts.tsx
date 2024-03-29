import React, { useEffect, useState } from "react";
import { Grid, Box, FormControl, Input, Flex } from "@chakra-ui/react";
import { UserData } from "../../../interfaces/vaultTypes";
import UserDetail from "./UserDetail";
import { RiUserSearchFill } from "react-icons/ri";
interface IProps {
  userData: UserData;
}

const UserAccounts: React.FC<IProps> = ({ userData }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const searchCondition = (value: string) =>
    value.toLowerCase().includes(searchValue.toLowerCase());

  const searchUsers = userData.filter(
    (login) => searchCondition(login.username) || searchCondition(login.site)
  );

  useEffect(() => {}, [searchValue]);

  return (
    <Box w="100%" h="100%">
      <Flex
        gridGap="4"
        px={2}
        align="center"
        w={{ base: "100%", sm: "200px", md: "400px" }}
        m="10px auto 20px"
      >
        <RiUserSearchFill fontSize="35px" color="#f5f5f5" />
        <FormControl>
          <Input
            borderColor="white"
            w="100%"
            type="text"
            color="#f5f5f5"
            placeholder="Search UserName or Site"
            _placeholder={{ opacity: 1, color: "#f5f5f5" }}
            onChange={onSearchHandler}
          />
        </FormControl>
      </Flex>
      <Grid
        w={{ base: "100%" }}
        h="100%"
        // overflow="hidden"
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gap={6}
        p={2}
        placeContent="center"
      >
        {searchUsers.map((login) => (
          <React.Fragment key={login.id}>
            <UserDetail login={login} />
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};
export default React.memo(UserAccounts);
