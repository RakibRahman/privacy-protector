import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";

const Home = () => {
  return (
    <Center bg="#DDF0E9" minH="80vh" className="vault__home">
      <Tabs
        isFitted
        variant="enclosed-colored"
        align="center"
        w="600px"
        border="1px"
        bg="#24313C"
        color="#FFFFFF"
      >
        <TabList mb="1em">
          <Tab bg="#435259" _selected={{ color: "white", bg: "#1AB188" }}>
            Log In
          </Tab>
          <Tab bg="#435259" _selected={{ color: "white", bg: "#1AB188" }}>
            Sign Up
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LogIn />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};
export default React.memo(Home);
