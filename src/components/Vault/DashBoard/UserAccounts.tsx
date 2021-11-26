import React from "react";
import { Grid } from "@chakra-ui/react";
import { UserData } from "../../../interfaces/vaultTypes";
import UserDetail from "./UserDetail";
interface IProps {
  userData: UserData;
}
const UserAccounts: React.FC<IProps> = ({ userData }) => {
  return (
    <Grid
      w={{ base: "100%" }}
      minH="auto"
      overflow="hidden"
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(2, 300px)",
        lg: "repeat(3, 300px)",
      }}
      gap={6}
      p="2"
      placeContent="center"
    >
      {userData.map((login) => (
        <React.Fragment key={login.id}>
          <UserDetail login={login} />
        </React.Fragment>
      ))}
    </Grid>
  );
};
export default React.memo(UserAccounts);
